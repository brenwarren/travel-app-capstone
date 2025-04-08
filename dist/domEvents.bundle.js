(()=>{"use strict";var e={362:(e,t,n)=>{n.d(t,{w:()=>u});var a=n(401);const o="http://api.geonames.org/searchJSON?q=",r="brenwarren",c=async(e,t,n,a="")=>{try{const o=a?`&country=${a}`:"",r=await fetch(`${e}${t}${o}&username=${n}`);if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return await r.json()}catch(e){throw console.error("Error in getCityData:",e),e}},i=async(e,t)=>{try{const n=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=d014c41fae424c64b0cce23415dfbe50`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(e){throw console.error("Error in getWeatherData:",e),e}},s=async(e,t)=>{const n=await(async(e,t="")=>{try{const n=`https://pixabay.com/api/?key=49556284-b1f2685ca2dc73e5108449d7c&q=${t?`${e}+${t.replace(/\s+/g,"_")}`:e}&image_type=photo`;console.log("Pixabay API Request URL:",n);const a=await fetch(n);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);const o=await a.json();return o.hits&&o.hits.length>0?o.hits[0].webformatURL:(console.warn("No images found for the given query."),null)}catch(e){return console.error("Error fetching image from Pixabay:",e),null}})(e,t),a=document.getElementById("travelImage");n?(a.src=n,a.alt=`Image of ${e}, ${t}`):(console.warn("No image found, using default image."),a.src="https://pixabay.com/get/gf25d50234f708fbac6df91ab7aa969785b3fc4c69802cdad62124b62075731463bb156496163199be0329e22fa4a3c27f124421f71083109a0021acf196c9a0e_1280.jpg")},d=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log("Fetched Data from Server:",t),document.getElementById("cityName").innerHTML=`City: ${t.city||"N/A"}`,document.getElementById("travelDateOutput").innerHTML=`Travel Date: ${t.travelDate||"N/A"}`,document.getElementById("country").innerHTML=`Country: ${t.country||"N/A"}`,document.getElementById("longitude").innerHTML=`Longitude: ${t.longitude||"N/A"}`,document.getElementById("latitude").innerHTML=`Latitude: ${t.latitude||"N/A"}`,document.getElementById("userResponse").innerHTML=`Todo's and comments: ${t.userResponse||"N/A"}`}catch(e){console.log("Error updating UI:",e)}},l=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log("Data sent to server:",e),e}catch(e){console.log("Error:",e)}};function u(e){const t=document.getElementById("city").value,n=document.getElementById("countryInput").value,a=document.getElementById("travelDate").value,u=document.getElementById("feelings").value;/^\d{2}-\d{2}-\d{4}$/.test(a)?(console.log(`City: ${t}, Country: ${n}, Travel Date: ${a}, Feelings: ${u}`),c(o,t,r,n).then((function(e){if(e&&e.geonames&&e.geonames.length>0){const{lng:n,lat:o,countryName:r}=e.geonames[0];console.log(`Fetched from API - Longitude: ${n}, Latitude: ${o}, Country: ${r}`),s(t,r||"");const c={city:t,travelDate:a,feelings:u,longitude:n,latitude:o,country:r};return console.log("Data to be sent to server:",c),i(o,n).then((e=>{const t=new Date(a.split("-").reverse().join("-")),n=new Date;if(Math.ceil((t-n)/864e5)>7)document.getElementById("weatherOutput").innerHTML="Weather information not available for dates more than one week from now.";else{const n=e.data.find((e=>e.datetime===t.toISOString().split("T")[0]));document.getElementById("weatherOutput").innerHTML=n?`\n                                Weather Forecast: ${n.weather.description}<br>\n                                Temperature: ${n.temp}°C\n                            `:"No weather data available for the selected date."}return l("/add",c)}))}console.error("No location data found in the API response:",e),alert("Unable to retrieve location data. Please try again.")})).then((()=>{console.log("Data successfully sent to the server."),d(),s(t,n)})).catch((function(e){console.error("Error fetching city data:",e.message||e),alert("An error occurred while fetching city data. Please try again.")}))):alert("Please enter a valid date in the format dd-mm-yyyy")}(0,a.M)()},401:(e,t,n)=>{n.d(t,{M:()=>r});var a=n(362);function o(){const{jsPDF:e}=window.jspdf,t=new e,n=document.getElementById("cityName").innerText,a=document.getElementById("travelDateOutput").innerText,o=document.getElementById("country").innerText,r=document.getElementById("longitude").innerText,c=document.getElementById("latitude").innerText,i=document.getElementById("weatherOutput").innerText,s=document.getElementById("userResponse").innerText;t.text("Travel Summary",10,10),t.text(`City: ${n}`,10,20),t.text(`Travel Date: ${a}`,10,30),t.text(`Country: ${o}`,10,40),t.text(`Longitude: ${r}`,10,50),t.text(`Latitude: ${c}`,10,60),t.text(`Weather: ${i}`,10,70),t.text(`Comments: ${s}`,10,80),t.save("Travel_Summary.pdf")}function r(){document.getElementById("generate").addEventListener("click",a.w),document.getElementById("savePdf").addEventListener("click",o)}document.addEventListener("DOMContentLoaded",(()=>{r()}))}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(401)})();