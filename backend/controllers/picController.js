import { unlink } from 'fs';
import UserService from '../services/UserService.js';

const userService = new UserService();

async function addPicture(req, res) {
    if (Number(req.body.id) !== Number(req.userInfo.user_id)) {
        return res.status(404);
    }
    let id = req.body.id;
    let filename = req.file.filename;

    const result = await userService.getItemById('picture', id);
    if (result) {
        unlink('.\\uploads\\' + result.image, (err) => {
            if (err) throw err;
            console.log(`${result.image} deleted`);
        });
    }

    await userService.addPictureById(id, filename);
    return res.json({
        image: req.file.filename,
        message: 'pic added',
    });
}

export { addPicture };
