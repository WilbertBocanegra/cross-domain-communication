import { detect } from 'detect-browser';
import type { ResponseEvent, InputGet, MessageEvents, InputSet } from '../interfaces';
import { ActionE } from '../enum';

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author David .... / Core Team SoftEngy
 * @author - if you modify this file added in this comment or another comment with @author
 * @description  Utilities to get and set message on a iframe client
 */

/** @type {string} */
let client: string;

const browser = detect();

const setClient = ({ uri }: { uri: string }) => {
	client = uri;
};

const createIFrame = (): HTMLIFrameElement => {
	const iframe: HTMLIFrameElement = document.createElement('iframe');
	iframe.src = client;
	iframe.style.display = 'none';
	document.body.appendChild(iframe);
	return iframe;
};

const set = <T>({ key }: InputSet<T>): Promise<ResponseEvent<T>> =>
	new Promise((resolve) => {
		if (!client) {
			throw new Error('Uri client not found');
		}

		/**
		 * @description Iframe instance
		 */
		const iframe: HTMLIFrameElement = createIFrame();

		/**
		 * @description Message Event
		 * @param {MessageEvents<T>} e
		 */
		const handleMessage = (e: MessageEvent<MessageEvents<T>>) => {
			if (e.data.action === ActionE.MOUNT) {
				if (browser?.name != 'chrome') {
					//code of browser
				} else {
					iframe.contentWindow?.postMessage({ action: ActionE.SET, key }, client);
				}
			}
			if (e.data.action === ActionE.SET) {
				resolve({ key, message: e.data.message, data: e.data.data });
				iframe.remove();

				/**
				 * @description Event listener remove if data is set successfuly
				 */
				window.removeEventListener('message', handleMessage);
			}
		};

		/**
		 * @description Event listener added to document body
		 */
		window.addEventListener('message', handleMessage);
	});

/**
 * @description Promise method to get a instance of message
 * @param {key:string}
 * @returns
 */
const get = <T>({ key }: InputGet): Promise<ResponseEvent<T>> =>
	new Promise((resolve) => {
		if (!client) {
			throw new Error('Uri client not found');
		}

		/**
		 * @description Iframe instance
		 */
		const iframe: HTMLIFrameElement = createIFrame();

		/**
		 * @description Message Event
		 * @param {MessageEvents<T>} e
		 */
		const handleMessage = (e: MessageEvent<MessageEvents<T>>) => {
			if (e.data.action === ActionE.MOUNT) {
				if (browser?.name == 'chrome') {
					iframe.contentWindow?.postMessage({ action: ActionE.GET, key }, client);
				} else {
					//code of browser
					console.log(browser?.name);
				}
			}
			if (e.data.action === ActionE.GET) {
				resolve({ key: e.data.key, message: e.data.message, data: e.data.data });
				iframe.remove();

				/**
				 * @description Event listener remove if data is get successfuly
				 */
				window.removeEventListener('message', handleMessage);
			}
		};

		/**
		 * @description Event listener added to document body
		 */
		window.addEventListener('message', handleMessage);
	});

export { client, setClient, set, get };
