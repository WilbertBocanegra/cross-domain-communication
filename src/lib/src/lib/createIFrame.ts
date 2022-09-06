interface Input {
	iframeUrl: string;
}

interface ICreateIFrame {
	(input: Input): Promise<HTMLIFrameElement>;
}



const createIFrame: ICreateIFrame = ({ iframeUrl }) =>
	new Promise((resolve) => {
		const iframe: HTMLIFrameElement = document.createElement('iframe');
		iframe.src = iframeUrl;
		iframe.onload = () => resolve(iframe);
		document.body.appendChild(iframe);
	});

export { createIFrame };
