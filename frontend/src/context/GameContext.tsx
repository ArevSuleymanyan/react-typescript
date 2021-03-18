import React, { useEffect, useState } from 'react';
import GameService from '../services/GameService';

type Props = {
    children:React.ReactChild
}
interface GameProps {
    board: object[],
    players:object[],
    changeBoard: (data:any) => void,
}

export const GameContext = React.createContext<GameProps|{}>({});
const gameService = new GameService();

export const GameProvider = ({children}:Props) => {
    const [board, setBoard] = useState([]);
    const [players, setPlayers] = useState([]);
    const changeBoard = (data:any) => {
        setBoard(data)
    }

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