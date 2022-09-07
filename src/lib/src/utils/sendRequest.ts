import type { ActionE } from '../enum';

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author - if you modify this file added in this comment or another comment with @author 
 */

interface SendMessage {
	action: ActionE;
	origin?: string;
	data?: unknown;
	key?: string;
	message?: string;
}

const sendRequest = ({ action, data, key, message, origin = '*' }: SendMessage) => {
	window.parent.postMessage({ action, key, data, message }, origin);
};

export { sendRequest };
