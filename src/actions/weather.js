import { SET_LOADER, SET_ERROR, FETCH_WEATHER, REMOVE_LOADER } from '../actionTypes/weather';

export const fetchWeather = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SET_ERROR,
            payload: null
        })
        dispatch({
            type: SET_LOADER
        })
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + data + ' &appid=676333cbc0396f75f1ee20012925c670');
        const weatherData = await res.json();
        dispatch({
            type: REMOVE_LOADER,
        })
        if (weatherData.name) {
            dispatch({
                type: FETCH_WEATHER,
                payload: weatherData
            })
        } else {
            dispatch({
                type: SET_ERROR,
                payload: weatherData.message
            })
        }
    }
}

