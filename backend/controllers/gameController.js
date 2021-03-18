import GameService from '../services/GameService.js';

const gameService = new GameService();

async function addBoard(req, res) {

    if (req.body.id !== req.userInfo.id) {
        return res.status(404);
    }
    const {id, board, score} = req.body
    
    await gameService.updateGame(id, board, score);
    
    return res.json({
        user: req.userInfo,
        message: 'Game saved!',
    });
}

export { addBoard };
