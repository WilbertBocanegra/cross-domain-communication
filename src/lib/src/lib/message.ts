/**
 * @author Wilbert Bocanegra Velazquez / Core Team SoftEngy
 */

import { EMessage } from '../enum';
import { sendMessage } from './sendMessage';

interface MessageData {
	key: string;
	message: string;
	action: EMessage;
}

/** @type {string[]} */
let origin: string[];

/**
 * @description Module to verify if origin list is exist and content data
 * @param {string[]} whiteList
 */
const setOrigin = (whiteList: string[]) => {
	if (typeof whiteList === 'object') {
		if (Array.isArray(whiteList)) {
			if (whiteList.length === 0) {
				throw new Error('The list of origin is required');
			} else {
				origin = [...whiteList, window.parent.origin];
			}
		} else {
			throw new Error('The list of origin is required');
		}
	}
};

/**
 * @description Module message to IFrame component
 * @param {MessageEvent<MessageData>} e
 */
const handleMessage = (e: MessageEvent<MessageData>) => {
	if (!origin.includes(e.origin)) {
		throw new Error('Not access for this origin');
	}

	if (e.data.action === EMessage.GET) {
		sendMessage({ action: EMessage.GET, key: e.data.key, origin: e.origin });
	}

	if (e.data.action === EMessage.SET) {
		sendMessage({ action: EMessage.SET, key: e.data.key, origin: e.origin });
	}
};

export { handleMessage, setOrigin };
