import { Router } from 'express';
import { addBoard } from '../../controllers/gameController.js';
import {
    login,
    register,
    addPicture,
} from '../../controllers/authController.js';
import upload from '../../middlewere/upload.js';
import GameService from '../../services/GameService.js';

const router = new Router();
const gameService = new GameService();

router.post('/login', login);
router.post('/register', register);
router.post('/board', addBoard);
router.post('/picture', upload.single('avatar'), addPicture);

router.get('/user', async (req, res) => {
    res.json(req.userInfo);
});

router.get('/game', async (req, res) => {
    let id = req.userInfo.id;
    let game = await gameService.getGameById(id);
    res.json(game.game_board);
});

export default router;
