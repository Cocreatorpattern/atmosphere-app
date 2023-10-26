import React,{useState}  from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css";




export default function Weather (props) {

const [weatherData,setWeatherData]=useState({ ready: false });
function handleResponse(response) {
console.log(response.data);
setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    date:new Date(response.data.dt*1000),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: response.data.wind.speed,
    city: response.data.name,
});


    
}

if (weatherData.ready){
 return (
<div className ="Weather">
<form>
    <div className="row">
    <div className="col-9">
    <input 
    type="search"
    placeholder="Enter City"
    className="form-control"
    autoFocus="on"
    />
    </div>
    <div className="col-3">
    <input type="submit" value="search" className="btn btn-primary"/>
</div>
</div>
</form>
<h1>{weatherData.city}</h1>
<ul>
 <li>
    <FormattedDate date={weatherData.date}/> 
    </li>
 <li>{weatherData.description} </li>
</ul>
<div className="row mt-3">
<div className="col-6">
<div className="clearfix d-flex align-items-center">
<img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
<span className="temperature">{Math.round(weatherData.temperature)}</span>
<span className="unit">°C</span>
</div>
</div>
</div>
<div className="col-6">
 <ul>
  
  <li>Humdity:{weatherData.humidity}</li>
  <li>Wind:{weatherData.wind}</li>
 </ul>
</div>
</div>

);
}else{
const apiKey = "c2664ee5d87203ac5037da5b7330b87c";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading....";

}
}