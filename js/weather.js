// const weatherAPI = "https://api.openweathermap.org/data/3.0/onecall?";
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const OPEN_WEATHER_API_KEY = "9d7e8d61b78f7ceb762f24f2a3f114de";



function onGeoOK(info) {
    const lat = info.coords.latitude;
    const lng = info.coords.longitude;
    // console.log("You live in", lat, lng);

    weatherAPI_params =`&lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_API_KEY}`;
    fetch(weatherAPI + weatherAPI_params).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const region = document.querySelector("#weather span:last-child");
        weather.innerText = `City: ${data.name} , ${data.weather[0].main} ( ${data.weather[0].description} ) `;
        region.innerText = `Current: ${data.main.temp} ( Min:${data.main.temp_min}, Max:${data.main.temp_max} )`;
        // console.log(data);
        // console.log(data.name, data.weather[0].main);   // 동명, 날씨 . 날씨설명
        // console.log(data.main.temp_min, data.main.temp, data.main.temp_max);  // 현재온도, 최대, 최소
    });

    // &exclude={current|minutely|hourly|daily|alerts}
    // By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).
}

function onGeoError(info) {
    alert("Can't find your position. No weather for U !");
    console.log("onGeoError() ", info);
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

// it works properly  2022-07-29 18:03
// https://api.openweathermap.org/data/2.5/weather?units=metric&lat=37.4927175&lon=126.9234553&appid=4bab3bfad935c771a329b614d50a900f
// {"coord":{"lon":126.915,"lat":37.4921},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":33.2,"feels_like":38.61,"temp_min":28.86,"temp_max":34.95,"pressure":1011,"humidity":56},"visibility":10000,"wind":{"speed":3.6,"deg":290},"clouds":{"all":75},"dt":1659085196,"sys":{"type":1,"id":8105,"country":"KR","sunrise":1659040404,"sunset":1659091441},"timezone":32400,"id":1948005,"name":"Kwangmyŏng","cod":200}