import minimist from "minimist";

export const getArgs = (): {
	[key: string]: string
} => {
	const {_, ...args} = minimist(process.argv.slice(2));
	return args;
};