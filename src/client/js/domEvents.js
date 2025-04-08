import { performAction, savePdf } from './app.js'; // Import savePdf from app.js

export function initializeEventListeners() {
    // Attach event listeners
    document.getElementById('generate').addEventListener('click', performAction);
    document.getElementById('savePdf').addEventListener('click', savePdf); // Update to use savePdf from app.js
}

// Ensure the DOM is fully loaded before initializing event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});