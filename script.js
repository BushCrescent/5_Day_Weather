var apiKey = "451e4a2460f2107ab9d665f5f96771d1";

document.querySelector("#submit-btn").addEventListener("click", function() {
    //capture user input
    var userInput = document.querySelector("#search").value;

    //generate Weather info
    forecast(userInput);
    currentWeather(userInput);
});
var currentWeather = function(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`).then(function(res) {
        return res.json(res)
    }).then(function(data) {

        console.log(data);
        //var cityData = data.list;
        //copy property path to get data
        var timeStamp = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + ((data.city.timezone) * 1000);
        var desiredTimeFormat = moment(new Date(timeStamp)).format('dddd, MMM Do, YYYY LT');
        var template = `
            <h1 class = "text-center">${cityName}</h1> 
            <h4 class = "text-center mb-5">${desiredTimeFormat}</h4>
            <h5 class = "text-center mt-5">${data.list[0].weather[0].description}</h5>
            <div class = "text-center temperature">${data.list[0].main.temp}°F</div>
            <div>${moment(data.list[1].dt_txt).format('HH')}:00</div>
            <div>${data.list[1].main.temp}°F</div>
            <div>Humidity: ${data.list[1].main.humidity}%</div>

        `;

        document.querySelector(".current-weather").innerHTML = template;
    });
}


var forecast = function(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`).then(function(res) {
        return res.json(res)
    }).then(function(data) {

        console.log(data);
        //var cityData = data.list;
        //copy property path to get data
        var timeStamp = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + ((data.city.timezone) * 1000);
        var desiredTimeFormat = moment(new Date(timeStamp)).format('dddd, MMM Do, YYYY LT');
        var template = `
            <div class = "background text-white">
            <h1 class = "text-center">${cityName}</h1> 
            <h4 class = "text-center mb-5">${desiredTimeFormat}</h4>
            <h5 class = "text-center mt-5">${data.list[0].weather[0].description}</h5>
            <div class = "text-center temperature">${data.list[0].main.temp}°F</div>
            

            <div class = "row">

            <div class = "col">
            <div>${moment(data.list[1].dt_txt).format('HH')}:00</div>
            <div>${data.list[1].main.temp}°F</div>
            <div>Humidity: ${data.list[1].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[2].dt_txt).format('HH')}:00</div>
            <div>${data.list[2].main.temp}°F</div>
            <div>Humidity: ${data.list[2].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[3].dt_txt).format('HH')}:00</div>
            <div>${data.list[3].main.temp}°F</div>
            <div>Humidity: ${data.list[3].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[4].dt_txt).format('HH')}:00</div>
            <div>${data.list[4].main.temp}°F</div>
            <div>Humidity: ${data.list[4].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[5].dt_txt).format('HH')}:00</div>
            <div>${data.list[5].main.temp}°F</div>
            <div>Humidity: ${data.list[5].main.humidity}%</div>
            </div>

            </div>

            <div class = "row mt-5">

            <div class = "col">
            <div>${moment(data.list[6].dt_txt).format('HH')}:00</div>
            <div>${data.list[6].main.temp}°F</div>
            <div>Humidity: ${data.list[6].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[7].dt_txt).format('HH')}:00</div>
            <div>${data.list[7].main.temp}°F</div>
            <div>Humidity: ${data.list[7].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[8].dt_txt).format('HH')}:00</div>
            <div>${data.list[8].main.temp}°F</div>
            <div>Humidity: ${data.list[8].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[9].dt_txt).format('HH')}:00</div>
            <div>${data.list[9].main.temp}°F</div>
            <div>Humidity: ${data.list[9].main.humidity}%</div>
            </div>

            <div class = "col">
            <div>${moment(data.list[10].dt_txt).format('HH')}:00</div>
            <div>${data.list[10].main.temp}°F</div>
            <div>Humidity: ${data.list[10].main.humidity}%</div>
            </div>
            </div>
            </div>
        `;

        document.querySelector(".current-weather").innerHTML = template;
    });
}