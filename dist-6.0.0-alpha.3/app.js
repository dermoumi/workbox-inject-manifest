(()=>{var e;console.log("hi this works"),e=()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")},"complete"===document.readyState?e():document.addEventListener("readystatechange",(t=>{console.log(t),"complete"===document.readyState&&e()}))})();