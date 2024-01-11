function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function createImages() {
  for (let i = 1; i < 10; i++) {
    const div = document.createElement("div");
    div.id = "drag" + i;
    div.draggable = true;
    div.ondragstart = drag;
    const images = document.getElementById("images");
    images.appendChild(div);
  }
}

function createTargets() {
  for (let i = 1; i < 10; i++) {
    const div = document.createElement("div");
    div.id = "div" + i;
    div.ondrop = drop;
    div.ondragover = allowDrop;
    const text = document.getElementById("text");
    text.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createImages();
  createTargets();
});
