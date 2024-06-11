"use strict"

const originalBtn = document.getElementById('original-btn');
const croplBtn = document.getElementById('crop-btn');
const zoomlBtn = document.getElementById('zoom-btn');

const originalDisplay = document.getElementById('original-display');
const cropDisplay = document.getElementById('crop-display');
const zoomDisplay = document.getElementById('zomm-display');

cropDisplay.style.display = 'none';
zoomDisplay.style.display = 'none';

croplBtn.addEventListener('click', () => {
    originalDisplay.style.display = 'none';
    zoomDisplay.style.display = 'none';
    cropDisplay.style.display = 'block';
});

zoomlBtn.addEventListener('click', () => {
    originalDisplay.style.display = 'none';
    zoomDisplay.style.display = 'block';
    cropDisplay.style.display = 'none';
});

originalBtn.addEventListener('click', () => {
    originalDisplay.style.display = 'block';
    zoomDisplay.style.display = 'none';
    cropDisplay.style.display = 'none';
});

