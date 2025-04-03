document.addEventListener("DOMContentLoaded", ()=>{
// Random color
const colorButton = document.querySelector(".navbar-end button:nth-child(2)");
colorButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor = getRandomColor();
});
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
};
// +- section
let taskCount = 6;
let indicatorCount = 23;
const taskCounter = document.querySelector(".card-title");
const indicatorBadge = document.querySelector(".indicator-item");
const historyContainer = document.querySelector("#history-list");

document.querySelectorAll(".completed-btn").forEach(button =>{
    button.addEventListener("click", ()=>{
        if(!button.disabled){
            button.disabled = true;
            taskCount--;
            indicatorCount++;
            taskCounter.textContent = taskCount;
            indicatorBadge.textContent = indicatorCount;
            // task name etc
            let taskName = button.closest(".card").querySelector(".card-title").textContent;
            let time = new Date().toLocaleTimeString();
            // history log
            let entry = document.createElement("div");
            entry.classList.add("history-entry");
            entry.innerHTML = `<p class="font-semibold text-lg">${taskName} completed at ${time}</p>`;
            historyContainer.appendChild(entry);
            
            alert("Board updated successfully");
            if (taskCount === 0) {
                alert("Congrats!!! You have completed all the current tasks🎉")
            }
        }
    })
})

const clearHistoryButton = document.querySelector('#clear-history');
if(clearHistoryButton){
    clearHistoryButton.addEventListener("click", () => {
        historyContainer.innerHTML = "";
    })
}

});