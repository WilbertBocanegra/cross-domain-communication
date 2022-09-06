/**
 * @author Wilbert Bocanegra Velazquez / Core Team SoftEngy
 */

/** @type {string} */
let client: string;

const setClient = ({ uri }: { uri: string }) => {
	if (typeof uri != 'string' || uri.length == 0) {
		throw new Error('The uri of host is required');
	}
	client = uri;
};

export { setClient, client };
