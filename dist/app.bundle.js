(()=>{"use strict";var e={362:(e,t,n)=>{n.d(t,{_:()=>m,w:()=>u});var o=n(536);const a="http://api.geonames.org/searchJSON?q=",r="brenwarren",c=async(e,t,n,o="")=>{try{const a=o?`&country=${o}`:"",r=await fetch(`${e}${t}${a}&username=${n}`);if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return await r.json()}catch(e){throw console.error("Error in getCityData:",e),e}},s=async(e,t)=>{try{const n=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=d014c41fae424c64b0cce23415dfbe50`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(e){throw console.error("Error in getWeatherData:",e),e}},i=async(e,t)=>{const n=await(async(e,t="")=>{try{const n=`https://pixabay.com/api/?key=49556284-b1f2685ca2dc73e5108449d7c&q=${t?`${e}+${t.replace(/\s+/g,"_")}`:e}&image_type=photo`;console.log("Pixabay API Request URL:",n);const o=await fetch(n);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const a=await o.json();return a.hits&&a.hits.length>0?a.hits[0].webformatURL:(console.warn("No images found for the given query."),null)}catch(e){return console.error("Error fetching image from Pixabay:",e),null}})(e,t),o=document.getElementById("travelImage");n?(o.src=n,o.alt=`Image of ${e}, ${t}`):(console.warn("No image found, using default image."),o.src="https://pixabay.com/get/gf25d50234f708fbac6df91ab7aa969785b3fc4c69802cdad62124b62075731463bb156496163199be0329e22fa4a3c27f124421f71083109a0021acf196c9a0e_1280.jpg")},d=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log("Fetched Data from Server:",t),document.getElementById("cityName").innerHTML=`City: ${t.city||"N/A"}`,document.getElementById("travelDateOutput").innerHTML=`Travel Date: ${t.travelDate||"N/A"}`,document.getElementById("country").innerHTML=`Country: ${t.country||"N/A"}`,document.getElementById("longitude").innerHTML=`Longitude: ${t.longitude||"N/A"}`,document.getElementById("latitude").innerHTML=`Latitude: ${t.latitude||"N/A"}`,document.getElementById("userResponse").innerHTML=`Todo's and comments: ${t.userResponse||"N/A"}`}catch(e){console.log("Error updating UI:",e)}},l=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log("Data sent to server:",e),e}catch(e){console.log("Error:",e)}};function u(e){const t=document.getElementById("city").value,n=document.getElementById("countryInput").value,o=document.getElementById("travelDate").value,u=document.getElementById("feelings").value;/^\d{2}-\d{2}-\d{4}$/.test(o)?(console.log(`City: ${t}, Country: ${n}, Travel Date: ${o}, Feelings: ${u}`),c(a,t,r,n).then((function(e){if(e&&e.geonames&&e.geonames.length>0){const{lng:n,lat:a,countryName:r}=e.geonames[0];console.log(`Fetched from API - Longitude: ${n}, Latitude: ${a}, Country: ${r}`),i(t,r||"");const c={city:t,travelDate:o,feelings:u,longitude:n,latitude:a,country:r};return console.log("Data to be sent to server:",c),s(a,n).then((e=>{const t=new Date(o.split("-").reverse().join("-")),n=new Date;if(Math.ceil((t-n)/864e5)>7)document.getElementById("weatherOutput").innerHTML="Weather information not available for dates more than one week from now.";else{const n=e.data.find((e=>e.datetime===t.toISOString().split("T")[0]));document.getElementById("weatherOutput").innerHTML=n?`\n                                Weather Forecast: ${n.weather.description}<br>\n                                Temperature: ${n.temp}°C\n                            `:"No weather data available for the selected date."}return l("/add",c)}))}console.error("No location data found in the API response:",e),alert("Unable to retrieve location data. Please try again.")})).then((()=>{console.log("Data successfully sent to the server."),d(),i(t,n)})).catch((function(e){console.error("Error fetching city data:",e.message||e),alert("An error occurred while fetching city data. Please try again.")}))):alert("Please enter a valid date in the format dd-mm-yyyy")}function m(){if(!window.jspdf||!window.jspdf.jsPDF)return console.error("jsPDF is not loaded correctly."),void alert("PDF generation failed. Please ensure jsPDF is loaded.");const{jsPDF:e}=window.jspdf,t=new e,n=document.getElementById("cityName").innerText,o=document.getElementById("travelDateOutput").innerText,a=document.getElementById("country").innerText,r=document.getElementById("longitude").innerText,c=document.getElementById("latitude").innerText,s=document.getElementById("weatherOutput").innerText,i=document.getElementById("userResponse").innerText;t.text("Travel Summary",10,10),t.text(`City: ${n}`,10,20),t.text(`Travel Date: ${o}`,10,30),t.text(`Country: ${a}`,10,40),t.text(`Longitude: ${r}`,10,50),t.text(`Latitude: ${c}`,10,60),t.text(`Weather: ${s}`,10,70),t.text(`Comments: ${i}`,10,80),t.save("Travel_Summary.pdf")}(0,o.M)()},536:(e,t,n)=>{n.d(t,{M:()=>a});var o=n(362);function a(){document.getElementById("generate").addEventListener("click",o.w),document.getElementById("savePdf").addEventListener("click",o._)}document.addEventListener("DOMContentLoaded",(()=>{a()}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(362)})();