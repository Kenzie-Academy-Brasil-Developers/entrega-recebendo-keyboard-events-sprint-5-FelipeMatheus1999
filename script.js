let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if (keyName === "ArrowDown") {
        boxTop += 10;
        console.log(boxTop)    }

    if (keyName === "ArrowUp") {
        boxTop -= 10;
    }

    if (keyName === "ArrowLeft") {
        boxLeft -= 10;
    }

    if (keyName === "ArrowRight") {
        boxLeft += 10;
    }

    document.querySelector(".box").style.top = boxTop + "px";
    document.querySelector(".box").style.left = boxLeft + "px";
});