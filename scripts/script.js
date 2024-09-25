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

// DOM elements
const catPreview = document.getElementById('catPreview');
const hatPreview = document.getElementById('hatPreview');
const catImage = document.getElementById('catImage');
const hatImage = document.getElementById('hatImage');

// Load initial cat and hat images
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

// Initially load the first cat and hat images
updateCat();
updateHat();

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
