import GameService from '../services/GameService.js';

const gameService = new GameService();

async function addBoard(req, res) {
    if (req.body.id !== req.userInfo.user_id) {
        return res.status(404);
    }

    const { id, board, score } = req.body;
    let json = JSON.stringify(board);
    await gameService.updateGame(id,{ user_id:id,game_board: json, score });

    return res.json({
        user: req.userInfo,
        message: 'Game saved!',
    });
}

export { addBoard };
