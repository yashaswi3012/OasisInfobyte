document.getElementById("convertButton").addEventListener("click", convertTemperature);

function convertTemperature() {
    // Get input values
    const tempInput = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultDisplay = document.getElementById("resultDisplay");

    // Validate that input is a number
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    // Variables to hold converted values
    let convertedTemp, convertedUnit;

    // Perform conversions based on the selected unit
    if (unit === "C") {
        convertedTemp = `Fahrenheit: ${(temperature * 9 / 5 + 32).toFixed(2)}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
    } else if (unit === "F") {
        convertedTemp = `Celsius: ${((temperature - 32) * 5 / 9).toFixed(2)}°C, Kelvin: ${((temperature - 32) * 5 / 9 + 273.15).toFixed(2)}K`;
    } else if (unit === "K") {
        convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${((temperature - 273.15) * 9 / 5 + 32).toFixed(2)}°F`;
    }

    // Display result
    resultDisplay.textContent = `Converted Temperature: ${convertedTemp}`;
}
