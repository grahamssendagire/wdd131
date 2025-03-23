document.getElementById("currentyear").textContent = new Date().getFullYear();  
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;  
const windChillElement = document.getElementById('windChill');  
const temperature = 5; // Static temperature value for calculations (°C)  
const windSpeed = 15; // Static wind speed value (km/h)  

function calculateWindChill(temp, speed) {  
    return Math.round(13.12 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));  
}  

// Conditions for displaying Wind Chill  
if (temperature <= 10 && windSpeed > 4.8) {  
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + '°C';  
} else {  
    windChillElement.textContent = 'N/A';  
}  
