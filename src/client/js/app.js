// import scss file
import '../styles/style.scss';

/* Global Variables */
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const username = 'brenwarren'; // Geonames username

// Event listener to add function to existing HTML DOM element
// This function is called when the button with id 'generate' is clicked.
// It retrieves the value of the input field with id 'city'.
// It calls the getCityData function to fetch data from the Geonames API.
// If the data is successfully retrieved, it updates the UI with the longitude, latitude, and country name.
// If there is an error, it logs the error message and alerts the user.
// The function is defined in the app.js file and is imported here.


export function performAction(e) {
    const city = document.getElementById('city').value;
    getCityData(baseURL, city, username)
        .then(function(data) {
            if (data && data.geonames && data.geonames.length > 0) {
                const { lng, lat, countryName } = data.geonames[0]; // Extract from the first result
                console.log(`Longitude: ${lng}, Latitude: ${lat}, Country: ${countryName}`);
                updateUI(lng, lat, countryName);
            } else {
                console.error('No location data found in the API response:', data);
                alert('Unable to retrieve location data. Please try again.');
            }
        })
        .catch(function(error) {
            console.error('Error fetching city data:', error.message || error);
            alert('An error occurred while fetching city data. Please try again.');
        });
}


/* Function to GET Geonames API Data */

// It constructs the URL using the base URL, city name, and username.
// It fetches data from the Geonames API and returns the JSON response.
// If the response is not ok, it throws an error.
// The function is asynchronous and uses try-catch for error handling.
// The function is called in the performAction function when the button is clicked.
// This function fetches data from the Geonames API based on the city name provided
const getCityData = async (baseURL, city, username) => {
    try {
        const res = await fetch(`${baseURL}${city}&username=${username}`);
        if (!res.ok) {
            // Throw an error if the HTTP status is not in the 200–299 range
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error in getCityData:', error);
        throw error; // Re-throw the error to be caught in performAction
    }
};

// This function updates the UI with the longitude, latitude, and country name.
/* Function to update UI */
const updateUI = (longitude, latitude, country) => {
    const longitudeElement = document.getElementById('longitude');
    const latitudeElement = document.getElementById('latitude');
    const countryElement = document.getElementById('country');

    if (longitudeElement) {
        longitudeElement.innerHTML = `Longitude: ${longitude}`;
    } else {
        console.error("Element with id 'longitude' not found.");
    }

    if (latitudeElement) {
        latitudeElement.innerHTML = `Latitude: ${latitude}`;
    } else {
        console.error("Element with id 'latitude' not found.");
    }

    if (countryElement) {
        countryElement.innerHTML = `Country: ${country}`;
    } else {
        console.error("Element with id 'country' not found.");
    }
};