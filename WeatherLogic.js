/**
 * @author: Prashanth Dasari
 * Personal Works
 */



//global variables declaration 
var nameFlag,pinFlag; //boolean flags




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
     var dynamicTF = document.getElementById('dynamicTF').value;
     var url = 'api.openweathermap.org/data/2.5/weather?q=';
     var response = '';
    // console.log("option selected : city pin YY :"+cityPinEntered+":");

    if(nameFlag == true && pinFlag == false){
        if(dynamicTF != null && dynamicTF != ''){
            url = 'api.openweathermap.org/data/2.5/weather?q='+dynamicTF;
            console.log("option selected : city name if :"+dynamicTF);
            response = JSON.parse(GetW(url));
            var displayResponse = document.getElementById('responseDivId');
            displayResponse.innerHTML = '<strong></strong>';
        }
        else
            alert('Please enter details');
    }
    else if(nameFlag == false && pinFlag == true){
        if(dynamicTF != null && dynamicTF != ''){
            dynamicTF = Number(dynamicTF);
             url = 'api.openweathermap.org/data/2.5/weather?q='+dynamicTF;
            console.log("option selected : city pin if :"+dynamicTF);
            response = JSON.parse(GetW(url));

        }
        else
            alert('Please enter details');
    }
    else
        alert('Please select appropriate option!');


    

    try {
        
    } catch (error) {
        
    }
}

/*
This function is for fetching current devices location i.e., latitude, longitude and get weather report through openWeather API (open source)
*/

//start of logic for current location's weather details
function getLocation(){
    var x = document.getElementById("responseDivId");
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
    
    console.log('lat : '+ lat + ' long : '+ long);
    if(lat != null && long != null){
       url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  long + '&units=metric&appid=b231606340553d9174136f7f083904b3';
       
       response = JSON.parse(GetW(url));
    console.log("temp : "+response.main.temp+'° °C');
    console.log("Country : "+response.sys.country);
    console.log("temp : "+response.name);

    var temp = document.getElementById('responseDivId');
    temp.innerHTML = "<br>Current Temperature : <b>"+ response.main.temp +" °</b> <br>"
                        + " Country : <b>"+response.sys.country+"</b> <br>"
                        + " City : <b>"+ response.name+"</b> <br>";
    
    }
}
}

//util function to build url as per needed
function GetW(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


//function to change the heading based the radio button selected!
function changeHeadingToName(){
    var dynamicHeading = document.getElementById("dynamicHeading");
        dynamicHeading.innerHTML = "City Name :  ";
        nameFlag = true;
        pinFlag = false;
}

////function to change the heading based the radio button selected!
function changeHeadingToPin(){
   var dynamicHeading = document.getElementById("dynamicHeading");
        dynamicHeading.innerHTML = "City Pin :  ";
        nameFlag = false;
        pinFlag = true;
}