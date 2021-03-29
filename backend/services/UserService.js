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
        return super.getItemById('users', id);
    }

    getEmailList(email) {
        return super.getItemList('users', 'email', email);
    }

    addUserById(data) {
        return super.addItemById('users', data);
    }

    async savePicture(userId, picture) {
        const result = await super.getItemById('picture',userId);
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
