import { client } from './client';

interface ICreateIFrame {
	(): Promise<HTMLIFrameElement>;
}

let iframe: HTMLIFrameElement;

const createIFrame: ICreateIFrame = () =>
	new Promise((resolve) => {
		const iframe: HTMLIFrameElement = document.createElement('iframe');
		iframe.src = client;
		iframe.style.display = 'none';
		iframe.onload = () => resolve(iframe);
		document.body.appendChild(iframe);
	});

const getIFrame = async () => {
	iframe = await createIFrame();
};

export { createIFrame, getIFrame, iframe };
