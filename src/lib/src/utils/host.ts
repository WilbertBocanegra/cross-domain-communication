import { ActionE } from '../enum';
import type { MessageEvents } from '../interfaces';
import { accessList } from './origin';
import { sendRequest } from './sendRequest';

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author - if you modify this file added in this comment or another comment with @author
 */

const handleMessage = (e: MessageEvent<MessageEvents>) => {
	if (!accessList.includes(e.origin)) {
		throw new Error('Not have access');
	}

	if (e.data.action === ActionE.GET) {
		const raw = localStorage.getItem(e.data.key);
		let value;

		try {
			value = JSON.parse(raw || '');
		} catch {
			value = raw?.toString();
		}

		/** @description send data of storage */
		sendRequest({
			action: ActionE.GET,
			key: e.data.key,
			data: value,
			message: 'message',
			origin: e.origin
		});
	}

	if (e.data.action === ActionE.SET) {
		const raw = e.data.data;
		const value =
			raw == null ? null : isObject(raw) || isArray(raw) ? JSON.stringify(raw) : raw.toString();

		if (value) localStorage.setItem(e.data.key, value);
		else localStorage.removeItem(e.data.key);

		/** @description send data of storage */
		sendRequest({
			action: ActionE.SET,
			key: e.data.key,
			data: e.data.data || null,
			message: 'message',
			origin: e.origin
		});
	}
};

const isObject = (raw: unknown) => typeof raw === 'object' && raw != null && !Array.isArray(raw);

const isArray = (raw: unknown) => typeof raw === 'object' && raw != null && Array.isArray(raw);

export { handleMessage };
