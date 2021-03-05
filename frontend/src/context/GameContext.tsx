import React, { useEffect, useState } from 'react';
import GameService from '../services/GameService';

export const GameContext = React.createContext([]);
const gameService = new GameService();
export const GameProvider = ({children}:any) => {
    const [game, setGame] = useState([]);

    useEffect(()=>{
        const getGameBoard = async () => { await gameService.getGameInfo().then(result => setGame(result))}
        getGameBoard();
    },[])
    return (
        <GameContext.Provider value={game} >
            {children}
        </GameContext.Provider>
    )
}