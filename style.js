// Select elements
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseByTenBtn = document.getElementById('increaseByTenBtn');
const resetBtn = document.getElementById('resetBtn');
const body=document.querySelector('body');

// Event listeners
// Increase counter by 1
increaseBtn.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 1;
    body.style.backgroundColor = 'lightgreen';
});

// Decrease counter by 1
decreaseBtn.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) - 1;
    body.style.backgroundColor = 'lightcoral';
});

// Increase counter by 10
increaseByTenBtn.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 10;
    body.style.backgroundColor = 'lightblue';
});

// Reset counter to 0
resetBtn.addEventListener('click', () => {
    counter.textContent = 0;
    body.style.backgroundColor = 'white';
});