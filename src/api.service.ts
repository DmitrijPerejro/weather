import axios from "axios";
import { read } from "./storage";

interface GetCoordinatesResult {
  lat: number;
  lon: number;
}

const getCoordinates = async (): Promise<GetCoordinatesResult> => {
	const token = await read("token");
	const city = await read("city");

	if (token === null) {
		throw new Error("Token is null, add token by command --t [API_KEY}");
	}

	if (city === null) {
		throw new Error("City is null, add token by command --c [CITY}");
	}

	const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${token}`);

	return {
		lat: data[0].lat,
		lon: data[0].lon
	};
};

export const getWeather = async () => {
	const token = await read("token");
	const { lat, lon } = await getCoordinates();

	const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
		params: {
			lat,
			lon,
			appid: token,
			units: "metric"
		}
	});

	return data;
};