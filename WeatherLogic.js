function getWeatherReport(){
    // var test;
    // console.log("test : "+test);
    // console.log("test : "+test != null);
    // test = '';
    // console.log("test : "+test != null +" test size"+test.length);

    // var optionSelected = document.getElementById('cityNameRadio').value;
    // console.log("option selected : city name "+optionSelected);
    // optionSelected = document.getElementById('cityPinRadio').value;
    // console.log("option selected : city pin "+optionSelected);

    //var cityPinEntered = Number(document.getElementById('cityPinCodeTF').value);
     var cityPinEntered = document.getElementById('cityPinCodeTF').value;
    // console.log("option selected : city pin YY :"+cityPinEntered+":");

    if(cityPinEntered != null && cityPinEntered != ''){
        cityPinEntered = Number(cityPinEntered);
        console.log("option selected : city pin if :"+cityPinEntered);
    }
    else
        console.log("option selected : city pin "+cityPinEntered);

    try {
        
    } catch (error) {
        
    }
}



function getLocation(){
    var x = document.getElementById("demo");
    var lat,long,response;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    lat = position.coords.latitude;
    long = position.coords.longitude;
    
    console.log('lat : '+ lat + ' llong : '+ long);
    if(lat != null && long != null){
       url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  long + '&units=metric&appid=b231606340553d9174136f7f083904b3';
       
       response = JSON.parse(GetW(url));
    console.log("temp : "+response.main.temp+' °C');
    console.log("Country : "+response.sys.country);
    console.log("temp : "+response.name);

    var temp = document.getElementById('result');
    temp.innerHTML = "<br>Current Temperature : <b>"+ response.main.temp +" °</b> <br>"
                        + " Country : <b>"+response.sys.country+"</b> <br>"
                        + " City : <b>"+ response.name+"</b> <br>";
    
    
    
    }


}
    
    
}


function GetW(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}