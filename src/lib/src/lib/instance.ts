/**
 * @author Wilbert Bocanegra Velazquez / Core Team SoftEngy
 */

let uriIFrame: string;

const setHost = ({ url }: { url: string }) => {
	uriIFrame = url;
};

export { setHost, uriIFrame };
