import { EMessage } from '../enum';
import type { HandleGet } from '../interfaces';
import { createIFrame } from '../lib/createIFrame';
import { sendMessage } from './sendMessage';
import { client } from './client';

interface MessageResponse {
	action: EMessage;
	key: string;
	data?: string;
	message: string;
}

const getInstance = () => {
	console.log('hello');
};

const get: HandleGet = ({ key, iframe }) =>
	new Promise((resolve) => {
		const node: HTMLIFrameElement = document.createElement('iframe');
		node.src = iframe;
		node.style.display = 'none';
		document.body.appendChild(node);

		window.addEventListener('message', (e) => {
			if (e.data.action === EMessage.MOUNT) {
				node.contentWindow?.postMessage({ action: EMessage.GET, key }, iframe);
			}
			if (e.data.action === EMessage.GET) {
				if (e.data.data !== null) {
					localStorage.setItem(e.data.key, e.data.data);
				}
				node.remove();
				resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
			}
		});

		window.removeEventListener('message', (e) => {
			if (e.data.action === EMessage.MOUNT) {
				node.contentWindow?.postMessage({ action: EMessage.GET, key }, iframe);
			}
			if (e.data.action === EMessage.GET) {
				if (e.data.data !== null) {
					localStorage.setItem(e.data.key, e.data.data);
				}
				node.remove();
				resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
			}
		});
	});

interface GetResponse {
	key: string;
}

const anotherGet = <T = unknown>({ key }: GetResponse): Promise<{ data: T }> =>
	new Promise((resolve, reject) => {
		if (typeof client != 'string' || client.trim() === '') {
			throw new Error('Client config not found');
		}

		let iframe: HTMLIFrameElement;

		createIFrame().then((value) => (iframe = value));

		const handleMessage = (e: MessageEvent<MessageResponse>) => {
			if (e.data.action === EMessage.MOUNT) {
				sendMessage({ action: EMessage.GET, origin: client });
			}

			if (e.data.action === EMessage.GET) {
				window.removeEventListener('message', handleMessage);
			}
			if (e.data.action === EMessage.SET) {
				window.removeEventListener('message', handleMessage);
			}
		};

		window.addEventListener('message', handleMessage);
	});

export { get, anotherGet };
