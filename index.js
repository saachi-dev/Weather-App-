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
     updateIcon(icon,main);
}
catch(error){
     alert("Location not found");
 }
}  

function updateDom(temp,name,type,icon,humidity,speed){
    cityName.innerText=name;
    weatherText.innerText=type;
    temperature.innerText=`${Math.floor(temp)}°C`;
    preci.innerText=`${humidity}%`;
    wind.innerText=`${speed} Km/h`;
}
//`http://openweathermap.org/img/wn/${icon}@2x.png`

function updateIcon(icon,type){
   if(type=="Clear"){
    weatherImg.src='./img/clearsky.png';
    
   }
   if(type=="Clouds"){
    weatherImg.src='./img/fewcloud.png';
   }
   if(type=="Atmosphere"){
    weatherImg.src='./img/mist.png';
   }
   if(type=="Snow"){
    weatherImg.src='./img/snow.png';
   }
   if(type=="Rain"){
    weatherImg.src='./img/showerrain.png';
   }
   if(type=="Drizzle"){
    weatherImg.src='./img/003-heavy-rain.png';
   }
   if(type=="Thunderstorm"){
    weatherImg.src='./img/tornado.png';
   }
}