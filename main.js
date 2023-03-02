// yaura des truc ici

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let sizeX = 0;
let sizeY = 0;

canvas.addEventListener('click', function(e) {
    document.getElementById("xCoordinate").value = e.screenX - 549;
    document.getElementById("yCoordinate").value = e.screenY - 117 *2;
});

function logKey(e) {
    document.getElementById("mousex").innerText = `
        Mouse X/Y: ${e.screenX - 549}, ${e.screenY- 117 *2}`;
    }
canvas.addEventListener("mousemove", logKey);

/* 
localStorage.setItem("shape", localStorage.getItem("shape") || "square");
localStorage.setItem("size", localStorage.getItem("size") || "5px");
localStorage.setItem("color", localStorage.getItem("color") || "black");*/

function Change(type, arg) {
    switch (type) {
        case "color":
            localStorage.setItem("color", arg);
        case "size":
            localStorage.setItem("size", arg);
        case "shape":
            localStorage.setItem("shape", arg);
    }
}

function generate() {
  sizeX = document.getElementById("sizeX").value;
  sizeY = document.getElementById("sizeY").value;
  x = document.getElementById("xCoordinate").value;
  y = document.getElementById("yCoordinate").value;
  if(document.getElementById("type").value == "square"){
      ctx.fillStyle = document.getElementById("color").value;
      ctx.fillRect(x, y, sizeX , sizeY);
  } else if(document.getElementById("type").value == "circle") {
      ctx.beginPath();
      ctx.fillStyle=document.getElementById("color").value;
      ctx.arc(x, y, sizeX, 0, 2 * Math.PI);
      ctx.fill();
  }
}


function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}