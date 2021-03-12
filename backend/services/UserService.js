import BaseService from './BaseService.js';
import { connection } from '../database.js';
const { queryAsync } = connection;

export default class UserService extends BaseService {
    constructor() {
        super();
        this.table = 'users';
        this.id = 'id';
        this.column = 'email';
    }
    getUserById(id) {
        return super.getItemById(this.table, this.id, id);
    }

    getMatchingEmail(email) {
        return super.getItemList(this.table, this.column, email);
    }


    getUserByEmail(email) {
        return super.getItemList(this.table, this.column, email);
    }

    insertUserInDB(name, email, password) {
        const sql = 'INSERT INTO users SET ?';
        return queryAsync(sql, { name, email, password })
            .then(() => console.log('user added'))
            .catch((error) => console.log(error));
    }
    
    async savePicture(userId, picture) {
        const result = await super.getItemById('picture', 'user_id', userId);
        if (!result) {
            return super.addItemById('picture', 'image', userId, picture);
        } else {
            return super.updateItem(
                'picture',
                'image',
                'user_id',
                userId,
                picture
            );
        }
    }
}
