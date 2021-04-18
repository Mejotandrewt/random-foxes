setup();

function setup() {
  getFox();
}

function getFox() {
  fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(data => updateFoxImgSrc(data.file));
}

function updateFoxImgSrc(src) {
  let img = document.querySelector("img");
  
  img.src = src;
}