let sqr = document.getElementById("square");
let btn = document.getElementById("btn");
let submit = document.getElementById("submit");

let defw = sqr.style.width = "30%";
let defh = sqr.style.height = "40%";
let defBorderRadius = sqr.style.borderRadius = "0px";
let defColor = sqr.style.backgroundColor = "lightblue";

submit.addEventListener("click", function() {
    let newW = document.getElementById("w").value;
    let newH = document.getElementById("h").value;
    let newBR = document.getElementById("borderRadius").value;
    let newColor = document.getElementById("color").value;

    if (newW) {
        sqr.style.width = newW + "%";
    }

    if (newH) {
        sqr.style.height = newH + "%";
    }

    if (newBR) {
        sqr.style.newBR = newBR + "px";
    }

    if (newColor) {
        sqr.style.backgroundColor = newColor;
    
    }
});

btn.addEventListener("click", function() {
    sqr.style.width = defw;
    sqr.style.height = defh;
    sqr.style.newBR = defBorderRadius;
    sqr.style.backgroundColor = defColor;

    document.getElementById("w").value = "";
    document.getElementById("h").value = "";
    document.getElementById("borderRadius").value = "";
    document.getElementById("color").value = "";
});
