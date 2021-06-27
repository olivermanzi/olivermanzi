export const CacheEnums = {
	TOKEN: "auth_token_key",
	USER: "user_cache_key"
};

export const setCache = (key, value) => {
	try {
		const parsedValue = JSON.stringify(value);
		localStorage.setItem(key, parsedValue);
		return Promise.resolve(true);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getCache = (key) => {
	if (!localStorage.getItem(key)) {
		return null;
	}

	try {
		const value = JSON.parse(localStorage.getItem(key));

		if (!value) {
			return null;
		} else {
			return value;
		}
	} catch (error) {
		return null;
	}
};

export const removeCache = (key) => {
	if (!localStorage.getItem(key)) {
		return null;
	}

	try {
		localStorage.removeItem(key);
		return true;
	} catch (error) {
		return null;
	}
};