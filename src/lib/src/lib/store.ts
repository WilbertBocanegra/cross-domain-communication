interface IKey<T = unknown> {
	key: string;
	data?: T;
}

const ls = localStorage;

const setKey = <T>({ key, data }: IKey<T>) => {
	console.log(key, data);
};

const getKey = <T>({ key, data }: IKey<T>) => {
	console.log(key, data);
};

export { setKey, getKey };
