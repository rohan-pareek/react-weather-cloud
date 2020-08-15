import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather';

function WeatherForm(props) {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        if(e.target.value) {
            setCity(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchWeather(city)
        setCity("")
    }

    return (
        <>
        <form className="weather-form" onSubmit = {handleSubmit}>
            <input 
            type="text" 
            placeholder = "Search your city here" 
            onChange = {handleChange}
            value = {city}
            />
            <button>
                {!props.loader && <i className="fa fa-search" aria-hidden="true"></i>}
                {props.loader && <i className="fa fa-spinner" aria-hidden="true"></i>
}
            </button>
            
        </form>
        <div style = {{display: 'block', color: 'red'}}>{props.error}</div>
        </>
    )
}

const mapStateToProps = (state) => (
    {
        weather: state.weather.weather,
        error: state.weather.error,
        loader: state.weather.loader
    }
)


export default connect(mapStateToProps, {fetchWeather})(WeatherForm);
