import { Router } from 'express';
import { addBoard } from '../../controllers/gameController.js';
import { login, register } from '../../controllers/authController.js';
import GameService from '../../services/GameService.js';

const router = new Router();
const gameService = new GameService();

router.post('/login', login);
router.post('/register', register);
router.post('/board', addBoard);

router.get('/user', async (req, res) => {
    let id = req.userInfo.id;
    let game = await gameService.getGameById(id);
    res.json({user:req.userInfo, game: game.lines_98});
});

router.get('/game', async (req, res) => {
    let id = req.userInfo.id;
    let game = await gameService.getGameById(id);
    res.json(game.lines_98);
});

export default router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImlhdCI6MTYxNDg1NzQ5NSwiZXhwIjoxNjIyNjMzNDk1fQ.NcPZ87NP2j_-Rcqiajj-hGMcaYo_BuM1Fzlp2IXtMhk
