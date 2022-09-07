import { client } from './client';

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author - if you modify this file added in this comment or another comment with @author
 * @description Checking this file in another day and added new bugs
 * @returns
 */
let iframeInstance: HTMLIFrameElement;

const createIFrame = (): Promise<HTMLIFrameElement> =>
	new Promise((resolve) => {
		const iframe: HTMLIFrameElement = document.createElement('iframe');
		iframe.src = client;
		iframe.style.display = 'none';
		iframe.onload = () => resolve(iframe);
		document.body.appendChild(iframe);
	});

const getIFrame = async () => {
	iframeInstance = await createIFrame();
};

export { createIFrame, getIFrame, iframeInstance };
