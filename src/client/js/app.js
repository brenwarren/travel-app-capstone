// Import SCSS file
import '../styles/style.scss';

/* Global Variables */
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const username = 'brenwarren'; // Geonames username
const weatherbitAPIKey = 'd014c41fae424c64b0cce23415dfbe50'; // Replace with your Weatherbit API key
const weatherbitBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily';
const pixabayAPIKey = '49556284-b1f2685ca2dc73e5108449d7c'; // Pixabay API key
const pixabayBaseURL = 'https://pixabay.com/api/';

/* Function to GET Geonames API Data */
// Updated to include optional country parameter
const getCityData = async (baseURL, city, username, country = '') => {
    try {
        const countryQuery = country ? `&country=${country}` : '';
        const res = await fetch(`${baseURL}${city}${countryQuery}&username=${username}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error in getCityData:', error);
        throw error;
    }
};

// Function to fetch weather data from Weatherbit API
const getWeatherData = async (lat, lng) => {
    try {
        const res = await fetch(`${weatherbitBaseURL}?lat=${lat}&lon=${lng}&key=${weatherbitAPIKey}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error in getWeatherData:', error);
        throw error;
    }
};

/* Function to fetch an image from Pixabay API */
// Default image URL
const defaultImageURL = "https://pixabay.com/get/gf25d50234f708fbac6df91ab7aa969785b3fc4c69802cdad62124b62075731463bb156496163199be0329e22fa4a3c27f124421f71083109a0021acf196c9a0e_1280.jpg";
const getCityImage = async (city, countryName = '') => {
    try {
        // Build the query string
        const query = countryName
            ? `${city}+${countryName.replace(/\s+/g, '_')}`
            : city; // Use only the city if countryName is empty

        // Construct the full URL
        const url = `${pixabayBaseURL}?key=${pixabayAPIKey}&q=${query}&image_type=photo`;

        // Log the full URL for debugging
        console.log('Pixabay API Request URL:', url);

        // Fetch the image from Pixabay API
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data.hits && data.hits.length > 0) {
            return data.hits[0].webformatURL; // Return the URL of the first image
        } else {
            console.warn('No images found for the given query.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching image from Pixabay:', error);
        return null;
    }
};

/* Update the travelImage element with the fetched image */
const updateTravelImage = async (city, countryName) => {
    const imageUrl = await getCityImage(city, countryName);
    const travelImageElement = document.getElementById('travelImage');
    if (imageUrl) {
        travelImageElement.src = imageUrl;
        travelImageElement.alt = `Image of ${city}, ${countryName}`;
    } else {
        console.warn('No image found, using default image.');
        //travelImageElement.alt = 'No image available';
        travelImageElement.src = defaultImageURL; // Use a default image URL if no image is found
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
        document.getElementById('userResponse').innerHTML = `Additional comments: ${allData.userResponse || 'N/A'}`;
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
// Updated to include country input
export function performAction(e) {
    const city = document.getElementById('city').value;
    const country = document.getElementById('countryInput').value; // New input for country
    const travelDate = document.getElementById('travelDate').value;
    const feelings = document.getElementById('feelings').value;

    // Validate travelDate format (dd-mm-yyyy)
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(travelDate)) {
        alert('Please enter a valid date in the format dd-mm-yyyy');
        return;
    }

    console.log(`City: ${city}, Country: ${country}, Travel Date: ${travelDate}, Feelings: ${feelings}`);

    getCityData(baseURL, city, username, country)
        .then(function(data) {
            // Inside performAction, after fetching location data
            if (data && data.geonames && data.geonames.length > 0) {
                const { lng, lat, countryName } = data.geonames[0];
                console.log(`Fetched from API - Longitude: ${lng}, Latitude: ${lat}, Country: ${countryName}`);

                // Update the travel image
                updateTravelImage(city, countryName || ''); // Pass an empty string if countryName is undefined

                const postDataObject = {
                    city,
                    travelDate,
                    feelings,
                    longitude: lng,
                    latitude: lat,
                    country: countryName,
                };
                console.log('Data to be sent to server:', postDataObject);

                // Fetch weather data
                return getWeatherData(lat, lng).then(weatherData => {
                    const travelDateObj = new Date(travelDate.split('-').reverse().join('-')); // Convert to Date object
                    const today = new Date();
                    const diffInDays = Math.ceil((travelDateObj - today) / (1000 * 60 * 60 * 24));

                    if (diffInDays > 7) {
                        document.getElementById('weatherOutput').innerHTML = 'Weather information not available for dates more than one week from now.';
                    } else {
                        const weatherForDate = weatherData.data.find(day => day.datetime === travelDateObj.toISOString().split('T')[0]);
                        if (weatherForDate) {
                            document.getElementById('weatherOutput').innerHTML = `
                                Weather Forecast: ${weatherForDate.weather.description}<br>
                                Temperature: ${weatherForDate.temp}°C
                            `;
                        } else {
                            document.getElementById('weatherOutput').innerHTML = 'No weather data available for the selected date.';
                        }
                    }

                    return postData('/add', postDataObject);
                });
            } else {
                console.error('No location data found in the API response:', data);
                alert('Unable to retrieve location data. Please try again.');
            }
        })
        .then(() => {
            console.log('Data successfully sent to the server.');
            updateUI();
            updateTravelImage(city, country);
        })
        .catch(function(error) {
            console.error('Error fetching city data:', error.message || error);
            alert('An error occurred while fetching city data. Please try again.');
        });
}

// Capture input values and send to server
document.getElementById('generate').addEventListener('click', performAction);