import { SET_LOADER, SET_ERROR, FETCH_WEATHER, REMOVE_LOADER } from '../actionTypes/weather'

export const weather = (state = { weather: null, loader: false, error: null }, action) => {
    switch (action.type) {
        case SET_LOADER:
            return { ...state, loader: true };
        case REMOVE_LOADER:
            return { ...state, loader: false };
        case SET_ERROR:
            console.log(action.payload)
            return { ...state, error: action.payload };
        case FETCH_WEATHER:
            console.log(action.payload)
            return { ...state, weather: action.payload };
        default:
            return state;
    }
}