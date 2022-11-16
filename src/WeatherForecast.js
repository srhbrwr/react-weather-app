import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
      }

    let apiKey = "6ccd6b17755ed4a6ceae6fef6e33efe5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">-1°</span>
                <span className="WeatherForecast-temperature-min">-7°</span>
            </div>
            </div>
        </div>
        </div>
    );
}