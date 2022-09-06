export function validateWhiteList(whiteList: string | string[]) {
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
}

const regex = new RegExp(
	/https?:\/\/(?:w{1,3}\.)?[^\s.]+(?:\.[a-z]+)*(?::\d+)?(?![^<]*(?:<\/\w+>|\/?>))/
);
