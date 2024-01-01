const time = document.getElementById('time');

// setInterval  Run at every provided timeframe 
// Time in Milliseconds
setInterval(() => {
    let date =  new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000);