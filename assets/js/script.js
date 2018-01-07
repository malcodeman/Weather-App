const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/weather");
const unsplash = require("./assets/js/unsplash");
const windowCommands = require("./assets/js/windowCommands");

function getCurrentWeather() {
    weather.getCurrentWeather("istanbul").then(response => {
            console.log(response);
            let temp = response.main.temp;
            let description = response.weather[0].description;
            let city = response.name;
            let country = response.sys.country;
            document.getElementById("image_left").src = unsplash.randomSearchTerm(response.weather[0].main);
            document.getElementById("image_right").src = unsplash.randomSearchTerm(city);
            document.getElementById("temperature").textContent = unitConverter.kelvinToCelsius(temp);
            document.getElementById("description").textContent = description;
            document.getElementById("location").textContent = city + ", " + country;
        })
        .catch(error => {
            console.log(error.message);
        })
}

function changeBackgroundImage(url) {
    document.getElementById("page").style.backgroundImage = "url(" + url + ")";
}

document.getElementById("close").addEventListener("click", () => {
    windowCommands.close();
})

function renderDate() {
    let date = new Date();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    document.getElementById("date").textContent = date.getDate() + " " + monthNames[date.getMonth()];
}

getCurrentWeather();
renderDate();