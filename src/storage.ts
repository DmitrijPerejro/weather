import { promises } from "fs";
import * as helpers from "./helpers";

const filePath = helpers.filePath;

const save = async (key: string, value: string): Promise<void> => {
	let data: Record<string, string> = {};

	if (await helpers.isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file as unknown as string);
	}

	data[key] = value;


	await promises.writeFile(filePath, JSON.stringify(data));
};

const read = async (key: string): Promise<string | null> => {
	if (await helpers.isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file as unknown as string);

		return data[key];
	}

	return null;
};


export { save, read };