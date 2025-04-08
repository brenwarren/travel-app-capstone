import { performAction } from './app.js'; // Import the performAction function
import { savePdf } from './pdfUtils.js'; // Import savePdf if moved to a utility file

export function initializeEventListeners() {
    // Attach event listeners
    document.getElementById('generate').addEventListener('click', performAction);

    document.getElementById('savePdf').addEventListener('click', savePdf);
}

// Ensure the DOM is fully loaded before initializing event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});