import { EMessage } from '../enum';

interface Input<T = unknown> {
	action: EMessage;
	key?: string;
	origin?: string;
	data?: T;
}

const sendMessage = <T>({ action, key, data, origin = '*' }: Input<T>): void => {
	let message = '';

	if (action === EMessage.GET) {
		const ls = localStorage.getItem(key as string);
		message = ls ? 'Found' : 'Not Found';
	}

	if (action === EMessage.SET) {
		localStorage.setItem(key as string, data as string);
		const ls = localStorage.getItem(key as string);
		message = ls ? 'Save' : 'Not Save';
	}

	window.parent.postMessage({ action, data, key, message }, origin);
};

export { sendMessage };
