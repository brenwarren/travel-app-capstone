(()=>{"use strict";let e=new Date,t=e.getMonth()+1+"."+e.getDate()+"."+e.getFullYear();document.getElementById("generate").addEventListener("click",(function(e){const c=document.getElementById("zip").value,r=document.getElementById("feelings").value;n("https://api.openweathermap.org/data/2.5/weather?zip=",c,"5d42225edc898d1242807eacb5ed22fa&units=metric").then((function(e){a("/add",{temperature:e.main.temp,date:t,userResponse:r})})).then(o)}));const n=async(e,t,n)=>{const a=await fetch(e+t+"&appid="+n);try{return await a.json()}catch(e){console.log("error",e)}},a=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}},o=async()=>{const e=await fetch("http://127.0.0.1:3000/all");try{const t=await e.json();document.getElementById("temp").innerHTML=`Temperature: ${t.temperature}°C`,document.getElementById("date").innerHTML=`Date: ${t.date}`,document.getElementById("content").innerHTML=`User Response: ${t.userResponse}`}catch(t){console.log("error",t);const n=await e.text();console.log("Response was not JSON:",n)}}})();