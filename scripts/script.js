// Array of cat images
const cats = [
  "./images/Cat/1.png",
  "./images/Cat/2.png",
  "./images/Cat/3.png",
  "./images/Cat/4.png",
  "./images/Cat/5.png",
  "./images/Cat/6.png",
];
let catIndex = 0;

// Array of hat images
const hats = [
  "./images/hats/1.png",
  "./images/hats/2.png",
  "./images/hats/3.png",
  "./images/hats/4.png",
  "./images/hats/5.png",
  "./images/hats/6.png",
];
let hatIndex = 0;

// Array of shirt images
const shirts = [
  "./images/pants/1.png",
  "./images/pants/2.png",
  "./images/pants/3.png",
];
let shirtIndex = 0;

// Array of background images
const backgrounds = [
  "./images/background/1.png",
  "./images/background/2.png",
  "./images/background/3.png",
  "./images/background/4.png",
];
let backgroundsIndex = 0;

// DOM elements previews
const catPreview = document.getElementById('catPreview');
const hatPreview = document.getElementById('hatPreview');
const shirtPreview = document.getElementById('shirtPreview');
const bgPreview = document.getElementById('bgPreview');

// DOM elements images
const catImage = document.getElementById('catImage');
const hatImage = document.getElementById('hatImage');
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

function updateHat() {
  const img = new Image();
  img.crossOrigin = "Anonymous";  // Enable CORS
  img.src = hats[hatIndex];
  img.onload = function() {
    hatPreview.src = img.src;
    hatImage.src = img.src;  // Update the main meme area
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

// Event listeners for hat navigation
document.getElementById('prevHat').addEventListener('click', () => {
  hatIndex = (hatIndex > 0) ? hatIndex - 1 : hats.length - 1;
  updateHat();
});
document.getElementById('nextHat').addEventListener('click', () => {
  hatIndex = (hatIndex < hats.length - 1) ? hatIndex + 1 : 0;
  updateHat();
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
updateHat();
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

  // Use html2canvas to capture the meme
  html2canvas(displayArea, {
    useCORS: true,
    allowTaint: true,
  }).then(canvas => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');

    // Programmatically click the link to trigger the download
    link.click();
  }).catch(error => {
    console.error("Error generating meme:", error);
    alert("There was an error generating your meme. Please try again.");
  });
});
