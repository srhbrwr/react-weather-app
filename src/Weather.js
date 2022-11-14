import React from "react";
import "./Weather.css";
import "./index.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Omaha</h1>
        <ul>
          <li>Monday 10:15</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 mt-3">
            <span className="temperature">-2</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="mostly cloudy"
                />
              </li>
              <li>Precipitation: 24%</li>
              <li>Humidity: 78%</li>
              <li>Wind: 11 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}