import { connection } from '../database.js';
const { queryAsync } = connection;

export default class BaseService {
    getItemById(table, id) {
        const sql = `SELECT * FROM ${table} WHERE user_id = ?`;
        return queryAsync(sql, [id])
            .then((result) => result[0])
            .catch((error) =>
                console.log('BaseService:getItemById: ', error.message)
            );
    }

    getItemList(table, column_name, column_value) {
        const sql = `SELECT * FROM ${table} WHERE ${column_name}=?`;
        return queryAsync(sql, [column_value])
            .then((result) => result)
            .catch((error) => console.log(error.message));
    }

    addItemById(table, data) {
        const sql = `INSERT INTO ${table} SET ?`;
        return queryAsync(sql, data)
            .then(() => console.log(table + ' added'))
            .catch((e) => console.log(e.message));
    }

    updateItem(table, column, data) {
        const sql = `UPDATE ${table} SET ${column}=? WHERE user_id=?`;
        return queryAsync(sql, [data])
            .then(() => console.log('update'))
            .catch((error) => console.log(error));
    }
}
