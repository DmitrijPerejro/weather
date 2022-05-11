import chalk from "chalk";
import dedent from "dedent-js";
import { save } from "./storage";
import boxen from "boxen";

const successLog = (input: string): void => {
	console.log(`${chalk.green(input)}`);
};

const errorLog = (input: string): void => {
	console.log(`ERROR \n ${chalk.red(input)}`);
};

const help = (): void => {
	successLog(dedent`
		\t
    ${chalk.bgCyan(" HELP ")}
    \t
		Без параметров - вывод погоды
		--s [CITY] для уставновки города
		--t [TOKEN] для уставноки токена
		--h Для вывода помощи
	`);
};

const saveToken = async (token: string): Promise<void> => {
	try {
		await	save("token", token);
		successLog(`TOKEN SAVED: ${token}`);
	} catch (e) {
		errorLog("TOKEN DOESN'T SAVED");
	}
};

const saveCity = async (city: string): Promise<void> => {
	try {
		await	save("city", city);
		successLog(`CITY SAVED: ${city}`);
	} catch (e) {
		errorLog("CITY DOESN'T SAVED");
	}
};

const showWeather = (res: Record<string, any>): void => {
	console.log(
		boxen(
			chalk.blue(
				dedent`
					Температура: ${res.main.temp} (Ощущается как ${res.main.feels_like})
					Влажность: ${res.main.humidity}%
					Скорость ветра: ${res.wind.speed}
				`
			),
			{
				title: `Погода в городе ${res.name}`,
				titleAlignment: "center",
				margin: 1,
				padding: 1,
				backgroundColor: "white"
			}
		)
	);
};

export {
	successLog,
	errorLog,
	help,
	saveToken,
	saveCity,
	showWeather,
};