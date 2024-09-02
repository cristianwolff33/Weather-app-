let lat;
let long;
const apiKey = "9d6c1963fdb9a8f890aaf3a31b9e699d";

function startApp() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                
                console.log("lat:", lat, "long:", long);

                getWeatherData();
            }
        );
    }
}

function getWeatherData() {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    console.log(url);

    fetch(url).then( function(response){
        response.json().then( function(data){
            console.log(data);
            updateWeatherData(data);
        
        } );
    });
};

function updateWeatherData(data){
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const cloudy = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const sunRise = new Date(data.sys.sunrise * 1000);
    const sunSet = new Date(data.sys.sunset * 1000);
    const city = data.name;



    document.getElementById("temp").innerHTML = temp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("cloudsPerc").innerHTML = cloudy;
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + sunRise.getMinutes();
    document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + sunSet.getMinutes();


    let imgUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"; 
    document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

    const locationLink = document.getElementById("locationLink");
    locationLink.innerHTML = city;
    locationLink.href = `https://openstreetmap.org/#map=9/${lat}/${long}`;


};

