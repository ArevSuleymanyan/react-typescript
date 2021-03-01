export default class GameService {

	getGameInfo() {
		return fetch('http://localhost:3000/api/game').then((response) => response.json())
	}

    getTopPlayers(){

    }
    
	addBoard() {

    }


}
