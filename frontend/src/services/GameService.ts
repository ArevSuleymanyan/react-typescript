import LocalStorageService from "./LocalStorageService"

export default class GameService {

	getGameInfo() {
		const token = LocalStorageService.getToken('token');
		const requestOption:object = {
			method: 'GET',
			headers: {
				'custom-token':token
			}
		}
		return fetch('http://localhost:3000/api/game', requestOption).then((response) => response.json())
	}
    
	addBoard(id:number, board:object[], score:number) {
		const token = LocalStorageService.getToken('token');
		const requestOption:object = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'custom-token':token
			},
			body: JSON.stringify({
				id,
				board,
				score
			})
		}
		return fetch('http://localhost:3000/api/board', requestOption).then(response => response.json())
    }


}
