import React from 'react';
import { connect } from 'react-redux';

function WeatherDetails(props) {
    let weatherImg;
    let sunrise;
    let sunset;
    if (props.weather) {
        weatherImg = 'http://openweathermap.org/img/wn/'+props.weather.weather[0].icon+'@4x.png';
        let riseHours = new Date(props.weather.sys.sunrise*1000).getHours();
        let riseMinutes = new Date(props.weather.sys.sunrise*1000).getMinutes();
        let setHours = new Date(props.weather.sys.sunset*1000).getHours();
        let setMinutes = new Date(props.weather.sys.sunset*1000).getMinutes();
        console.log(riseHours, riseMinutes, setHours, setMinutes)
        sunrise = riseHours + ':' +riseMinutes + ((riseHours > 12) ? 'pm': 'am');
        sunset = setHours + ':' +setMinutes + ((setHours > 12) ? 'pm': 'am');
        
    }
    return (
        <>
            {props.weather && <div className="weather-details">
                <div className="weather-section">
                    <img src={weatherImg} alt="Light Intensity drizzle" />
                    <span>{props.weather.weather[0].description}</span>
                </div>
                <div className="temp-sun-section">
                    <div className="temp">
                        <div className="min">
                            <span>Min. Temp</span>
                            <span>{(props.weather.main.temp_min-273.5).toFixed(2)}&#8451;</span>
                        </div>
                        <div className="max">
                            <span>Max. Temp</span>
                            <span>{(props.weather.main.temp_max-273.5).toFixed(2)}&#8451;</span>
                        </div>
                    </div>
                    <div className="sun">
                        <div className="rise">
                            <span>Sunrise</span>
                            <span>{sunrise}</span>
                        </div>
                        <div className="set">
                            <span>Sunset</span>
                            <span>{sunset}</span>
                        </div>
                    </div>
                </div>
                <div className="lat-log-section">
                    <div className="lat">
                        <span>Latitude</span>
                        <span>{props.weather.coord.lat}</span>
                    </div>
                    <div className="long">
                        <span>Longitude</span>
                        <span>{props.weather.coord.lon}</span>
                    </div>
                </div>
                <div className="city-name-section">
                    {props.weather.name}
                </div>
            </div>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather
})

export default connect(mapStateToProps, null)(WeatherDetails);
