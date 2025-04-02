document.addEventListener("NavEndButton", ()=>{
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





});