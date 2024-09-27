// Array of cat images
const cats = [
  "./images/cat/green.png",
  "./images/cat/redd.png",
];
let catIndex = 0;

// Array of eye images
const eyes = [
  "./images/eyes/1.png",
  "./images/eyes/2.png",
];
let eyeIndex = 0;

// Array of mouth images
const mouths = [
  "./images/mouths/1.png",
  "./images/mouths/2.png",
];
let mouthIndex = 0;

// Array of shirt images
const shirts = [
  "./images/shirts/1.png",
  "./images/shirts/2.png",
];
let shirtIndex = 0;

// Array of background images
const backgrounds = [
  "./images/background/1.png",
  "./images/background/2.png",
  "./images/background/3.png",
];
let backgroundsIndex = 0;

// DOM elements previews
const catPreview = document.getElementById('catPreview');
const eyePreview = document.getElementById('eyePreview');
const mouthPreview = document.getElementById('mouthPreview');
const shirtPreview = document.getElementById('shirtPreview');
const bgPreview = document.getElementById('bgPreview');

// DOM elements images
const catImage = document.getElementById('catImage');
const eyeImage = document.getElementById('eyeImage');
const mouthImage = document.getElementById('mouthImage');
const shirtImage = document.getElementById('shirtImage');
const bgImage = document.getElementById('bgImage');

function updateCat() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = cats[catIndex];
  img.onload = function() {
    catPreview.src = img.src;
    catImage.src = img.src;  // Update the main meme area
  };
}

function updateEye() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = eyes[eyeIndex];
  img.onload = function() {
    eyePreview.src = img.src;
    eyeImage.src = img.src;  // Update the main meme area
  };
}

function updateMouth() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = mouths[mouthIndex];
  img.onload = function() {
    mouthPreview.src = img.src;
    mouthImage.src = img.src;  // Update the main meme area
  };
}

function updateShirt() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = shirts[shirtIndex];
  img.onload = function() {
    shirtPreview.src = img.src;
    shirtImage.src = img.src;  // Update the main meme area
  };
}

function updateBackground() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = backgrounds[backgroundsIndex];
  img.onload = function() {
    bgPreview.src = img.src;
    bgImage.src = img.src;  // Update the main meme area
  };
}

// Event listeners for cat navigation
document.getElementById('prevCat').addEventListener('click', () => {
  catIndex = (catIndex > 0) ? catIndex - 1 : cats.length - 1;
  updateCat();
});
document.getElementById('nextCat').addEventListener('click', () => {
  catIndex = (catIndex < cats.length - 1) ? catIndex + 1 : 0;
  updateCat();
});

// Event listeners for eye navigation
document.getElementById('prevEye').addEventListener('click', () => {
  eyeIndex = (eyeIndex > 0) ? eyeIndex - 1 : eyes.length - 1;
  updateEye();
});
document.getElementById('nextEye').addEventListener('click', () => {
  eyeIndex = (eyeIndex < eyes.length - 1) ? eyeIndex + 1 : 0;
  updateEye();
});

// Event listeners for eye navigation
document.getElementById('prevMouth').addEventListener('click', () => {
  mouthIndex = (mouthIndex > 0) ? mouthIndex - 1 : mouths.length - 1;
  updateMouth();
});
document.getElementById('nextMouth').addEventListener('click', () => {
  mouthIndex = (mouthIndex < mouths.length - 1) ? mouthIndex + 1 : 0;
  updateMouth();
});

// Event listeners for shirt navigation
document.getElementById('prevShirt').addEventListener('click', () => {
  shirtIndex = (shirtIndex > 0) ? shirtIndex - 1 : shirts.length - 1;
  updateShirt();
});
document.getElementById('nextShirt').addEventListener('click', () => {
  shirtIndex = (shirtIndex < shirts.length - 1) ? shirtIndex + 1 : 0;
  updateShirt();
});

// Event listeners for background navigation
document.getElementById('prevBg').addEventListener('click', () => {
  backgroundsIndex = (backgroundsIndex > 0) ? backgrounds.length - 1 : backgrounds.length - 1;
  updateBackground();
});
document.getElementById('nextBg').addEventListener('click', () => {
  backgroundsIndex = (backgroundsIndex < backgrounds.length - 1) ? backgroundsIndex + 1 : 0;
  updateBackground();
});

// Initially load the first cat and hat images
updateCat();
updateEye();
updateMouth();
updateShirt();
updateBackground();

// Add event listener for top text input
document.getElementById('topTextVal').addEventListener('input', function () {
  const topText = document.getElementById('topText');
  topText.textContent = this.value;
});

// Add event listener for bottom text input
document.getElementById('bottomTextVal').addEventListener('input', function () {
  const bottomText = document.getElementById('bottomText');
  bottomText.textContent = this.value;
});

// Handle download button click
document.querySelector('.downloadBtn').addEventListener('click', function () {
  const displayArea = document.getElementById('displayAreaScreen');
  html2canvas(displayArea, {
    useCORS: true,
    allowTaint: true,
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(error => {
    console.error("Error generating meme:", error);
    alert("There was an error generating your meme. Please try again.");
  });
});

