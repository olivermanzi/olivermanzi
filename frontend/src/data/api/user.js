import axios from "axios";
import { config as Config } from "../../helpers/token-helper";

export let patchUser = async (name, email, shortBio, longBio, token) => {
	let data = { name: name, email: email, bio:{ short: shortBio, long: longBio} };

	try {
		let response = await axios.patch("/oliver", data, Config(token));
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
