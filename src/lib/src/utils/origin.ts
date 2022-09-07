/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author David ... / Core Team
 * @author - if you modify this file added in this comment or another comment with @author in new line
 */

let accessList: string[];

/**
 * @author David
 */
const validateWhiteList = (whiteList: string | string[]) => {
	if (whiteList == null) {
		throw new Error('The list of origin is required');
	}

	const parsed = typeof whiteList === 'string' ? JSON.parse(whiteList) : whiteList;

	if (!Array.isArray(parsed)) {
		throw new Error('The structure of list is invalid');
	}

	if (parsed.length === 0) {
		throw new Error('The list of origin is required');
	}

	const final = parsed.map((item: unknown) => {
		if (!(typeof item === 'string' && regex.test(item)))
			throw new Error('The list only accept string with URL structure');
		return item;
	});

	return final;
};

/**
 * @author David
 */
const regex = new RegExp(
	/https?:\/\/(?:w{1,3}\.)?[^\s.]+(?:\.[a-z]+)*(?::\d+)?(?![^<]*(?:<\/\w+>|\/?>))/
);

const setAccess = (access: string[] | string) => {
	accessList = validateWhiteList(access);
};

export { setAccess, accessList };
