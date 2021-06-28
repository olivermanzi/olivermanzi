export default $axios => ({
	async login (email, password) {
		try {
			const response = await $axios.post("/auth/login", {
				email,
				password
			});

			if (response.status === 200) {
				return response;
			} else {
				throw response;
			}
		} catch (error) {
			return Promise.reject(error);
		}
	},
	async register (name, email, password, shortBio, longBio) {
		try {
			const response = await $axios.post("/auth/register", {
				name,
				email,
				password,
				bio: { short: shortBio, long: longBio }
			});

			if (response.status === 201) {
				return response;
			} else {
				throw response;
			}
		} catch (error) {
			return Promise.reject(error);
		}
	},
	async patchPassword (oldPassword, newPassword, token) {
		try {
			const response = await $axios.patch(
				"/auth/password",
				{ oldPassword, newPassword },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (response.status === 200) {
				return response;
			} else {
				throw response;
			}
		} catch (error) {
			return Promise.reject(error);
		}
	}
});
