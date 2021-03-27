import { Router } from 'express';
import { addBoard } from '../../controllers/gameController.js';
import {
    login,
    register,
    addPicture,
} from '../../controllers/authController.js';
import upload from '../../middlewere/upload.js';
import GameService from '../../services/GameService.js';
import UserService from '../../services/UserService.js';

const router = new Router();
const gameService = new GameService();
const userService = new UserService();

router.post('/login', login);
router.post('/register', register);
router.post('/board', addBoard);
router.post('/picture', upload.single('avatar'), addPicture);

router.get('/user', async (req, res) => {
    const result = await userService.getItemById(
        'picture',
        req.userInfo.user_id
    );

    let img = '';
    if (result) {
        img = result.image;
    }
    res.json({
        user: req.userInfo,
        avatar: img,
    });
});

router.get('/game', async (req, res) => {
    let id = req.userInfo.user_id;
    const game = await gameService.getGameById(id);
    const players = await gameService.getTopPlayers();
    console.log(game)
    res.json({
        players,
        board: game.game_board,
        score:game.score,
    });
});


export default router;
