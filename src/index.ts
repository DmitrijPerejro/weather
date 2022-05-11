#!/usr/bin/env node
import { initCommand } from "./commands";
import { getWeather } from "./api.service";
import { showWeather } from "./log";

const initCLI = async () => {
	await initCommand();
	const weather = await getWeather();
	showWeather(weather);
};

initCLI();