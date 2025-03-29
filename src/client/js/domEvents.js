import { performAction } from './app.js';

// This function attaches an event listener to the button with id 'generate'.
// When the button is clicked, it calls the performAction function.
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    if (generateButton) {
        generateButton.addEventListener('click', performAction);
    } else {
        console.error("Element with id 'generate' not found.");
    }
});