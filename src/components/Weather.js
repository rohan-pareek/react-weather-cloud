import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherTitle from './WeatherTitle'
import WeatherDetails from './WeatherDetails'

export default function Weather() {
    return (
        <div className = "app">
            <WeatherTitle />
            <WeatherForm />
            <WeatherDetails />
        </div>
    )
}
