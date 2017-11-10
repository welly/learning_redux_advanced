import axios from 'axios';

const API_KEY = '0b6f8ccfb8bb5ea14fc23f6f08eac5cf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const URL = `${ROOT_URL}&q=${city},GB`;
	const request = axios.get(URL);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
