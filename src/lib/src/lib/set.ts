import { EMessage } from '../enum';
import type { Handle } from '../interfaces';
import { createIFrame } from './createIFrame';
import { uriIFrame } from './instance';

const set: Handle = ({ key, iframe, data }) =>
	new Promise((resolve) => {
		const node: HTMLIFrameElement = document.createElement('iframe');
		node.src = iframe;
		node.style.display = 'none';
		document.body.appendChild(node);

		window.addEventListener('message', (e) => {
			if (e.data.action === EMessage.MOUNT) {
				node.contentWindow?.postMessage({ action: EMessage.SET, key, data }, iframe);
			}
			if (e.data.action === EMessage.SET) {
				localStorage.setItem(e.data.key, e.data.data);
				node.remove();
				resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
			}
		});

		window.removeEventListener('message', (e) => {
			if (e.data.action === EMessage.MOUNT) {
				node.contentWindow?.postMessage({ action: EMessage.SET, key, data }, iframe);
			}
			if (e.data.action === EMessage.SET) {
				localStorage.setItem(e.data.key, e.data.data);
				node.remove();
				resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
			}
		});
	});

export { set };
