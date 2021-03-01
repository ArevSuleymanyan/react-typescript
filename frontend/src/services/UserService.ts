export default class UserService {
	getUserInfo() {
		return fetch('http://localhost:3000/api/user').then((response) => response.json())
	}

	login() {}

	register() {}

}
