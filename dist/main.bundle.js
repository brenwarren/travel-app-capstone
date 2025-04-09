/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(){document.getElementById("generate").addEventListener("click",y),document.getElementById("savePdf").addEventListener("click",v)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){r=function(){return e};var t,e={},o=Object.prototype,a=o.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),i=new S(r||[]);return c(a,"_invoke",{value:j(t,n,i)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var L=Object.getPrototypeOf,T=L&&L(L(N([])));T&&T!==o&&a.call(T,u)&&(E=T);var I=x.prototype=w.prototype=Object.create(E);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,c,i,u){var s=h(t[o],t,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function j(e,n,r){var o=p;return function(a,c){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw c;return{value:t,done:!0}}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=h(e,n,r);if("normal"===s.type){if(o=r.done?m:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=h(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function n(){for(;++o<e.length;)if(a.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return c.next=c}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,c(I,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(I),t},e.awrap=function(t){return{__await:t}},k(P.prototype),f(P.prototype,s,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var c=new P(d(t,n,r,o),a);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(I),f(I,l,"Generator"),f(I,u,(function(){return this})),f(I,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return i.type="throw",i.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=a.call(c,"catchLoc"),s=a.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function i(t){o(c,r,a,i,u,"next",t)}function u(t){o(c,r,a,i,u,"throw",t)}i(void 0)}))}}t.d({},{w:()=>y,_:()=>v}),document.addEventListener("DOMContentLoaded",(function(){e()}));var c="http://api.geonames.org/searchJSON?q=",i="brenwarren",u=function(){var t=a(r().mark((function t(e,n,o){var a,c,i,u,s=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",t.prev=1,c=a?"&country=".concat(a):"",t.next=5,fetch("".concat(e).concat(n).concat(c,"&username=").concat(o));case 5:if((i=t.sent).ok){t.next=8;break}throw new Error("HTTP error! Status: ".concat(i.status));case 8:return t.next=10,i.json();case 10:return u=t.sent,t.abrupt("return",u);case 14:throw t.prev=14,t.t0=t.catch(1),console.error("Error in getCityData:",t.t0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n,r){return t.apply(this,arguments)}}(),s=function(){var t=a(r().mark((function t(e,n){var o,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://api.weatherbit.io/v2.0/forecast/daily","?lat=").concat(e,"&lon=").concat(n,"&key=").concat("d014c41fae424c64b0cce23415dfbe50"));case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("HTTP error! Status: ".concat(o.status));case 6:return t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Error in getWeatherData:",t.t0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),l="./media/default-image.png",f=function(){var t=a(r().mark((function t(e){var n,o,a,c,i,u=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",t.prev=1,o=n?"".concat(e,"+").concat(n.replace(/\s+/g,"_")):e,a="".concat("https://pixabay.com/api/","?key=").concat("49556284-b1f2685ca2dc73e5108449d7c","&q=").concat(o,"&image_type=photo"),console.log("Pixabay API Request URL:",a),t.next=7,fetch(a);case 7:if((c=t.sent).ok){t.next=10;break}throw new Error("HTTP error! Status: ".concat(c.status));case 10:return t.next=12,c.json();case 12:if(!((i=t.sent).hits&&i.hits.length>0)){t.next=17;break}return t.abrupt("return",i.hits[0].webformatURL);case 17:return console.warn("No images found for the given query."),t.abrupt("return",null);case 19:t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(1),console.error("Error fetching image from Pixabay:",t.t0),t.abrupt("return",null);case 25:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=a(r().mark((function t(e,n){var o,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e,n);case 2:o=t.sent,a=document.getElementById("travelImage"),o?(a.src=o,a.alt="Image of ".concat(e,", ").concat(n)):(console.warn("No image found, using default image."),a.src=l);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=a(r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/all");case 2:return e=t.sent,t.prev=3,t.next=6,e.json();case 6:n=t.sent,console.log("Fetched Data from Server:",n),document.getElementById("cityName").innerHTML="City: ".concat(n.city||"N/A"),document.getElementById("travelDateOutput").innerHTML="Travel Date: ".concat(n.travelDate||"N/A"),document.getElementById("country").innerHTML="Country: ".concat(n.country||"N/A"),document.getElementById("longitude").innerHTML="Longitude: ".concat(n.longitude||"N/A"),document.getElementById("latitude").innerHTML="Latitude: ".concat(n.latitude||"N/A"),document.getElementById("userResponse").innerHTML="Todo's and comments: ".concat(n.userResponse||"N/A"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),console.log("Error updating UI:",t.t0);case 19:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(r().mark((function t(){var e,n,o,a,c=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},t.next=4,fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return o=t.sent,t.prev=5,t.next=8,o.json();case 8:return a=t.sent,console.log("Data sent to server:",a),t.abrupt("return",a);case 13:t.prev=13,t.t0=t.catch(5),console.log("Error:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(){return t.apply(this,arguments)}}();function y(t){var e=document.getElementById("city").value,n=document.getElementById("countryInput").value,r=document.getElementById("travelDate").value,o=document.getElementById("feelings").value;/^\d{2}-\d{2}-\d{4}$/.test(r)?(console.log("City: ".concat(e,", Country: ").concat(n,", Travel Date: ").concat(r,", Feelings: ").concat(o)),u(c,e,i,n).then((function(t){if(t&&t.geonames&&t.geonames.length>0){var n=t.geonames[0],a=n.lng,c=n.lat,i=n.countryName;console.log("Fetched from API - Longitude: ".concat(a,", Latitude: ").concat(c,", Country: ").concat(i)),d(e,i||"");var u={city:e,travelDate:r,feelings:o,longitude:a,latitude:c,country:i};return console.log("Data to be sent to server:",u),s(c,a).then((function(t){var e=new Date(r.split("-").reverse().join("-")),n=new Date;if(Math.ceil((e-n)/864e5)>7)document.getElementById("weatherOutput").innerHTML="Weather information not available for dates more than one week from now.";else{var o=t.data.find((function(t){return t.datetime===e.toISOString().split("T")[0]}));document.getElementById("weatherOutput").innerHTML=o?"\n                                Weather Forecast: ".concat(o.weather.description,"<br>\n                                Temperature: ").concat(o.temp,"°C\n                            "):"No weather data available for the selected date."}return p("/add",u)}))}console.error("No location data found in the API response:",t),alert("Unable to retrieve location data. Please try again.")})).then((function(){console.log("Data successfully sent to the server."),h(),d(e,n)})).catch((function(t){console.error("Error fetching city data:",t.message||t),alert("An error occurred while fetching city data. Please try again.")}))):alert("Please enter a valid date in the format dd-mm-yyyy")}function v(){if(!window.jspdf||!window.jspdf.jsPDF)return console.error("jsPDF is not loaded correctly."),void alert("PDF generation failed. Please ensure jsPDF is loaded.");var t=new(0,window.jspdf.jsPDF),e=document.getElementById("cityName").innerText,n=document.getElementById("travelDateOutput").innerText,r=document.getElementById("country").innerText,o=document.getElementById("longitude").innerText,a=document.getElementById("latitude").innerText,c=document.getElementById("weatherOutput").innerText,i=document.getElementById("userResponse").innerText;t.text("Travel Summary",10,10),t.text("City: ".concat(e),10,20),t.text("Travel Date: ".concat(n),10,30),t.text("Country: ".concat(r),10,40),t.text("Longitude: ".concat(o),10,50),t.text("Latitude: ".concat(a),10,60),t.text("Weather: ".concat(c),10,70),t.text("Comments: ".concat(i),10,80),t.save("Travel_Summary.pdf")}document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("travelImage");t&&(t.src=l)})),e(),document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("savePdf"),e=document.getElementById("entryHolder");t.style.display="none",new MutationObserver((function(){""!==e.innerText.trim()?t.style.display="block":t.style.display="none"})).observe(e,{childList:!0,subtree:!0,characterData:!0})})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(t){console.log("Service Worker registered with scope:",t.scope)})).catch((function(t){console.error("Service Worker registration failed:",t)}))}))})();