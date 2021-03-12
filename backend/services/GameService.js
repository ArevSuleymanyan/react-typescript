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

    updateGame(id, board) {
        const data = JSON.stringify(board);
        return super.updateItem(
            this.table,
            this.game_column,
            this.id,
            id,
            data
        );
    }
}
