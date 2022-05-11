import {saveCity, saveToken, help} from "./log";
import { getArgs } from "./args";

export const initCommand = async (): Promise<void> => {
	const args = getArgs();

	for (const key in args) {
		if (key === "h") {
			help();
			process.exit(0);
		}
	
		if (key === "t") {
			await saveToken(args[key]);
		}
	
		if (key === "c") {
			await saveCity(args[key]);
		}
	}

};


// --t=d6eb93f6de5e4c508f21fd2b9f165908 --c=Odessa