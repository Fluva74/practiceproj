const container = document.querySelector(".container");

function changeBg() {
    let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    container.style.background = color;
}