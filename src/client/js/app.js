// Import SCSS file
import '../styles/style.scss';

/* Global Variables */
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const username = 'brenwarren'; // Geonames username

/* Function to GET Geonames API Data */
// This function fetches data from the Geonames API based on the city name provided.
// It constructs the URL using the base URL, city name, and username.
// It fetches data from the Geonames API and returns the JSON response.
// If the response is not ok, it throws an error.
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

/* Function to update UI */
// This function updates the UI with the longitude, latitude, and country name.
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log('Fetched Data from Server:', allData); // Log the fetched data for debugging

        // Update the UI with the fetched data
        document.getElementById('cityName').innerHTML = `City: ${allData.city || 'N/A'}`;
        document.getElementById('travelDateOutput').innerHTML = `Travel Date: ${allData.travelDate || 'N/A'}`;
        //document.getElementById('travelDateOutput').innerHTML = 'Travel Date: Test Value';
        document.getElementById('country').innerHTML = `Country: ${allData.country || 'N/A'}`;
        document.getElementById('longitude').innerHTML = `Longitude: ${allData.longitude || 'N/A'}`;
        document.getElementById('latitude').innerHTML = `Latitude: ${allData.latitude || 'N/A'}`;
        document.getElementById('userResponse').innerHTML = `Feelings: ${allData.userResponse || 'N/A'}`;
    } catch (error) {
        console.log('Error updating UI:', error);
    }
};

/* Function to POST data to server */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log('Data sent to server:', newData);
        return newData;
    } catch (error) {
        console.log('Error:', error);
    }
};

/* Main Function: performAction */
// This function is called when the button with id 'generate' is clicked.
// It retrieves the value of the input field with id 'city'.
// It calls the getCityData function to fetch data from the Geonames API.
// If the data is successfully retrieved, it updates the UI with the longitude, latitude, and country name.
// If there is an error, it logs the error message and alerts the user.
export function performAction(e) {
    const city = document.getElementById('city').value;
    const travelDate = document.getElementById('travelDate').value;
    const feelings = document.getElementById('feelings').value;

    // Validate travelDate format (dd-mm-yyyy)
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(travelDate)) {
        alert('Please enter a valid date in the format dd-mm-yyyy');
        return;
    }

    console.log(`City: ${city}, Travel Date: ${travelDate}, Feelings: ${feelings}`);

    getCityData(baseURL, city, username)
        .then(function(data) {
            if (data && data.geonames && data.geonames.length > 0) {
                const { lng, lat, countryName } = data.geonames[0]; // Extract from the first result
                console.log(`Fetched from API - Longitude: ${lng}, Latitude: ${lat}, Country: ${countryName}`);

                // Send data to the server
                const postDataObject = {
                    city,
                    travelDate,
                    feelings,
                    longitude: lng,
                    latitude: lat,
                    country: countryName,
                };
                console.log('Data to be sent to server:', postDataObject);
                return postData('/add', postDataObject);
            } else {
                console.error('No location data found in the API response:', data);
                alert('Unable to retrieve location data. Please try again.');
            }
        })
        .then(() => {
            console.log('Data successfully sent to the server.');
            // Update the UI after sending data to the server
            updateUI();
        })
        .catch(function(error) {
            console.error('Error fetching city data:', error.message || error);
            alert('An error occurred while fetching city data. Please try again.');
        });
}

// Capture input values and send to server
document.getElementById('generate').addEventListener('click', performAction);