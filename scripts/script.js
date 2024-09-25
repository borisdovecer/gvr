// Array of cat images
const cats = [
    "https://michimaker.vercel.app/_next/image?url=%2Fassets%2Fcat%2Fmichiwhat.png%3Findex%3D6&w=96&q=75",
  "https://michimaker.vercel.app/_next/image?url=%2Fassets%2Fcat%2Fpurp.png%3Findex%3D8&w=96&q=75",
  "https://michimaker.vercel.app/_next/image?url=%2Fassets%2Fcat%2Fscary2.png%3Findex%3D9&w=96&q=75"
];
let catIndex = 0;

// Array of hat images
const hats = [
    "https://michimaker.vercel.app/_next/image?url=%2Fassets%2Fhats%2Fanime2.png%3Findex%3D2&w=96&q=75",
  "https://raw.githubusercontent.com/shaykhmirzaban/Michi-Meme-Maker/refs/heads/main/images/Cat/10.png",
  "https://michimaker.vercel.app/_next/image?url=%2Fassets%2Fhats%2Fatchhat.png%3Findex%3D8&w=96&q=75"];
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
