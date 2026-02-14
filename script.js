// Falling Hearts Animation
function createFallingHearts() {
    const heartCount = 50;
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.classList.add('fall');
        }, Math.random() * 3000);
    }
}

// Message Switching
const messages = [
    'Happy Valentine’s Day!',
    'Love is in the air!',
    'You are my everything!',
    'You make my heart smile!'
];
let messageIndex = 0;
const messageElement = document.getElementById('message');
function switchMessage() {
    messageIndex = (messageIndex + 1) % messages.length;
    messageElement.innerText = messages[messageIndex];
}
setInterval(switchMessage, 4000);

// Photo Gallery
const images = [...document.querySelectorAll('.gallery img')];
let currentIndex = 0;
function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = (i === index) ? 'block' : 'none';
    });
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
setInterval(nextImage, 3000);

// Love Counter
let loveCounter = 0;
const counterElement = document.getElementById('love-counter');
function increaseCounter() {
    loveCounter += 1;
    counterElement.innerText = `Loves: ${loveCounter}`;
}
setInterval(increaseCounter, 60000);

// Initialize functions
createFallingHearts();
showImage(currentIndex);