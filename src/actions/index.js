const API_KEY = '0b6f8ccfb8bb5ea14fc23f6f08eac5cf';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}
