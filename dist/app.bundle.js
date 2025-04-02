(()=>{"use strict";document.getElementById("generate").addEventListener("click",(function(e){const t=document.getElementById("city").value,n=document.getElementById("travelDate").value,o=document.getElementById("feelings").value;/^\d{2}-\d{2}-\d{4}$/.test(n)?(console.log(`City: ${t}, Travel Date: ${n}, Feelings: ${o}`),(async(e,t)=>{try{const e=await fetch(`http://api.geonames.org/searchJSON?q=${t}&username=brenwarren`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error in getCityData:",e),e}})(0,t).then((function(e){if(e&&e.geonames&&e.geonames.length>0){const{lng:a,lat:r,countryName:c}=e.geonames[0];console.log(`Fetched from API - Longitude: ${a}, Latitude: ${r}, Country: ${c}`);const l={city:t,travelDate:n,feelings:o,longitude:a,latitude:r,country:c};return console.log("Data to be sent to server:",l),(async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log("Data sent to server:",e),e}catch(e){console.log("Error:",e)}})("/add",l)}console.error("No location data found in the API response:",e),alert("Unable to retrieve location data. Please try again.")})).then((()=>{console.log("Data successfully sent to the server."),(async()=>{const e=await fetch("/all");try{const t=await e.json();console.log("Fetched Data from Server:",t),document.getElementById("cityName").innerHTML=`City: ${t.city||"N/A"}`,document.getElementById("travelDateOutput").innerHTML=`Travel Date: ${t.travelDate||"N/A"}`,document.getElementById("country").innerHTML=`Country: ${t.country||"N/A"}`,document.getElementById("longitude").innerHTML=`Longitude: ${t.longitude||"N/A"}`,document.getElementById("latitude").innerHTML=`Latitude: ${t.latitude||"N/A"}`,document.getElementById("userResponse").innerHTML=`Additional comments: ${t.userResponse||"N/A"}`}catch(e){console.log("Error updating UI:",e)}})()})).catch((function(e){console.error("Error fetching city data:",e.message||e),alert("An error occurred while fetching city data. Please try again.")}))):alert("Please enter a valid date in the format dd-mm-yyyy")}))})();