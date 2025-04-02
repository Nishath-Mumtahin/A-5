document.addEventListener("NavEndButton", ()=>{
// Random color
const colorButton = document.querySelector(".navbar-end button:nth-child(2)");
colorButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor = getRandomColor();
})
})