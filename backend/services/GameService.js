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
        return super.getItemById(this.table, this.id, id);
    }

    addNewGame(id, board) {
        const json = JSON.stringify(board);
        return super.addItemById(this.table, this.game_column, id, json);
    }

    updateGame(id, board, score) {
        const data = JSON.stringify(board);
        const sql = `UPDATE ${this.table} SET ${this.game_column}= ?, score=${score} WHERE ${this.id}=${id}`;

        return queryAsync(sql, [data])
            .then(() => console.log('game saved'))
            .catch((e) => console.log(e.message));
    }
    getTopPlayers() {
        const sql =
            'select name,score from  game, users  where game.user_id = users.id order by score desc';
        return queryAsync(sql)
            .then((result) => result.slice(0, 3))
            .catch((error) => console.log(error.message));
    }
    getScore(id) {
        const sql = `SELECT score FROM game WHERE user_id=${id};`;
        return queryAsync(sql)
            .then((result) => result[0].score)
            .catch((e) => console.log(e.message));
    }
}
