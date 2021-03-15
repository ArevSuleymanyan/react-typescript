import React, { useEffect, useState } from 'react';
import GameService from '../services/GameService';

export const GameContext = React.createContext([]);
const gameService = new GameService();
export const GameProvider = ({children}:any) => {
    const [board, setBoard] = useState([]);
    const [players, setPlayers] = useState([]);
    const changeBoard = (data:any) => setBoard(data)

    useEffect(()=>{
        const getGameBoard = async () => { await gameService.getGameInfo().then(result => {
            setBoard(result.board)
            setPlayers(result.players)
        } )}
        getGameBoard();
    },[])
    return (
        <GameContext.Provider value={{
            board,
            players,
            changeBoard
        }} >
            {children}
        </GameContext.Provider>
    )
}