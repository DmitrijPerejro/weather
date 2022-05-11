import { promises } from "fs";
import path from "path";
import os from "os";

export const isExist = async (path: string): Promise<boolean> =>{
	try {
		await promises.stat(path);
		return true;
	} catch (e) {
		return false;
	}
};

export const filePath = path.join(os.homedir(), "weather-data.json");