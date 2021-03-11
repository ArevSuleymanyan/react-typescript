import LocalStorageService from './LocalStorageService'

export default class UserService {
	getUserInfo() {
		const token = LocalStorageService.getToken('token')
		const requestOption: object = {
			method: 'GET',
			headers: {
				'custom-token': token
			}
		}
		return fetch('http://localhost:3000/api/user', requestOption).then((response) => response.json())
	}

	login(email: string, password: string) {
		const requestOption: object = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		}
		return fetch('http://localhost:3000/api/login', requestOption).then((response) => response.json())
	}

	register(name: string, email: string, password: string, confirmPassword: string) {
		const requestOption: object = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password,
				confirmPassword
			})
		}
		return fetch('http://localhost:3000/api/register', requestOption).then((response) => response.json())
	}

	addPicture( file:FormData){
		const token = LocalStorageService.getToken('token')
		const requestOption: object = {
			method: 'POST',
			headers: {
				// 'Content-Type': 'multipart/form-data',
				'custom-token': token
			},
			body:file
			
		}
		return fetch('http://localhost:3000/api/picture', requestOption).then((response) => response.json())
	}

	
}
