(()=>{"use strict";var e={362:(e,t,n)=>{n.d(t,{w:()=>l});const o="http://api.geonames.org/searchJSON?q=",r="brenwarren",a=async(e,t,n)=>{try{const o=await fetch(`${e}${t}&username=${n}`);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return await o.json()}catch(e){throw console.error("Error in getCityData:",e),e}},c=async(e,t)=>{try{const n=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=d014c41fae424c64b0cce23415dfbe50`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(e){throw console.error("Error in getWeatherData:",e),e}},i=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log("Fetched Data from Server:",t),document.getElementById("cityName").innerHTML=`City: ${t.city||"N/A"}`,document.getElementById("travelDateOutput").innerHTML=`Travel Date: ${t.travelDate||"N/A"}`,document.getElementById("country").innerHTML=`Country: ${t.country||"N/A"}`,document.getElementById("longitude").innerHTML=`Longitude: ${t.longitude||"N/A"}`,document.getElementById("latitude").innerHTML=`Latitude: ${t.latitude||"N/A"}`,document.getElementById("userResponse").innerHTML=`Additional comments: ${t.userResponse||"N/A"}`}catch(e){console.log("Error updating UI:",e)}},s=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log("Data sent to server:",e),e}catch(e){console.log("Error:",e)}};function l(e){const t=document.getElementById("city").value,n=document.getElementById("travelDate").value,l=document.getElementById("feelings").value;/^\d{2}-\d{2}-\d{4}$/.test(n)?(console.log(`City: ${t}, Travel Date: ${n}, Feelings: ${l}`),a(o,t,r).then((function(e){if(e&&e.geonames&&e.geonames.length>0){const{lng:o,lat:r,countryName:a}=e.geonames[0];console.log(`Fetched from API - Longitude: ${o}, Latitude: ${r}, Country: ${a}`);const i={city:t,travelDate:n,feelings:l,longitude:o,latitude:r,country:a};return console.log("Data to be sent to server:",i),c(r,o).then((e=>{const t=new Date(n.split("-").reverse().join("-")),o=new Date;if(Math.ceil((t-o)/864e5)>7)document.getElementById("weatherOutput").innerHTML="Weather information not available for dates more than one week from now.";else{const n=e.data.find((e=>e.datetime===t.toISOString().split("T")[0]));document.getElementById("weatherOutput").innerHTML=n?`\n                                Weather Forecast: ${n.weather.description}<br>\n                                Temperature: ${n.temp}°C\n                            `:"No weather data available for the selected date."}return s("/add",i)}))}console.error("No location data found in the API response:",e),alert("Unable to retrieve location data. Please try again.")})).then((()=>{console.log("Data successfully sent to the server."),i()})).catch((function(e){console.error("Error fetching city data:",e.message||e),alert("An error occurred while fetching city data. Please try again.")}))):alert("Please enter a valid date in the format dd-mm-yyyy")}document.getElementById("generate").addEventListener("click",l)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o=n(362);document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("generate");e?e.addEventListener("click",o.w):console.error("Element with id 'generate' not found.")}))})();