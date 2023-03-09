const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a4a659351bmshac2ff0d49921ddap159a72jsnd90fc21b1bd9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kathmandu', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        temp.innerHTML = response.temp
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));