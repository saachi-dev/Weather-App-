//selecting elements 
var input = document.querySelector('.city-input');
var submit = document.querySelector('.city-submit');
var cityName =  document.querySelector('.city');
var weatherImg = document.querySelector('.weather-img');
var weatherText = document.querySelector('.weather-text');
var preci = document.querySelector('.humidity-text');
var wind = document.querySelector('.wind-text');
var temperature = document.querySelector('.weather-temp');
var target;

//event listeners






//https:api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=London
//functions 

//search function 
function search (){
    
   let target= input.value;
   fetchData(target);
}

const fetchData = async (target)=>{
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${target}&appid=6f51e720bf1d5bf52f32e54d7dfb5a74&units=metric`;
        const response = await fetch(url);
        const data =  await response.json();
        console.log(data);
        
        
         // Destructuring
    const {
        main: {temp,humidity},
        weather:[ { main, icon }],
        wind: {speed},
        name
          }=data;
     updateDom(temp,name,main,icon,humidity,speed);  
}
catch(error){
     alert("Location not found");
 }
}  

function updateDom(temp,name,type,icon,humidity,speed){
    cityName.innerText=name;
    weatherImg.src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherText.innerText=type;
    temperature.innerText=`${Math.floor(temp)}°`;
    preci.innerText=`${humidity}%`;
    wind.innerText=`${speed} Km/h`;
}