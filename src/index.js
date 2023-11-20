import './style.css'

const menu = document.getElementById("menu");
const dropDown = document.getElementById("drop-down");

menu.addEventListener("mouseover", () => {
    // console.log("focus")
    dropDown.style.display = "inherit"
});
menu.addEventListener("mouseout", () => {
    // console.log("out")
    dropDown.style.display = "none";
})