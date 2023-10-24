import React from "react";
import "./Weather.css";




export default function Weather () {
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
<h1>Manchester</h1>
<ul>
 <li>Tuesday 18:00 </li>
 <li>Mostly Cloudy  </li>
</ul>
<div className="row mt-3">
<div className="col-6">
<div className="clearfix">
<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/>
<span className="temperature">6</span>
<span className="unit">°C</span>
</div>
</div>
</div>
<div className="col-6">
 <ul>
  <li>Precipitation:22%</li>
  <li>Humdity:91%</li>
  <li>Wind:2mph</li>
 </ul>
</div>
</div>

);
}