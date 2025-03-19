/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '5d42225edc898d1242807eacb5ed22fa&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const zip = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    getWeather(baseURL, zip, apiKey)
        .then(function(data) {
            postData('/add', {
                temperature: data.main.temp,
                date: newDate,
                userResponse: userResponse
            });
        })
        .then(updateUI);
}

/* Function to GET Web API Data */
const getWeather = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + '&appid=' + key);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to POST data */
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
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to GET Project Data and update UI */
const updateUI = async () => {
    const request = await fetch('http://127.0.0.1:3000/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°C`;
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('content').innerHTML = `User Response: ${allData.userResponse}`;
    } catch (error) {
        console.log('error', error);
        const responseText = await request.text();
        console.log('Response was not JSON:', responseText);
    }
};
