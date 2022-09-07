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
		/**
		 * @description send data of storage
		 */

		sendRequest({
			action: ActionE.GET,
			key: e.data.key,
			data: 'storage',
			message: 'message',
			origin: e.origin
		});
	}
	if (e.data.action === ActionE.SET) {
		/**
		 * @description send data of storage
		 */

		sendRequest({
			action: ActionE.SET,
			key: e.data.key,
			data: 'storage',
			message: 'message',
			origin: e.origin
		});
	}
};

export { handleMessage };
