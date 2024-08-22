let lat;
let long;
let apiKey = "f03964241c61053875ad71c776cdb4f6 ";

function startApp (){

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log("lat:", lat, "long:", long);

                
            }
        );
    }
}

