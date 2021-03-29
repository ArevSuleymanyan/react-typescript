import BaseService from './BaseService.js';
import { connection } from '../database.js';

const { queryAsync } = connection;

export default class GameService extends BaseService {
    constructor() {
        super();
        this.table = 'game';
        this.id = 'user_id';
        this.game_column = 'game_board';
    }

    getGameById(id) {
        return super.getItemById('game', id);
    }

    addGameById(data) {
        return super.addItemById('game', data);
    }

    updateGame(id, data) {
        const sql = `UPDATE game SET ? WHERE user_id=${id}`;

        return queryAsync(sql, [data])
            .then(() => console.log('game saved'))
            .catch((e) => console.log(e.message));
    }

    getTopPlayers() {
        const sql =
            'select name,score from  game, users  where game.user_id = users.user_id order by score desc';
        return queryAsync(sql)
            .then((result) => result.slice(0, 3))
            .catch((error) => console.log(error.message));
    }
}
