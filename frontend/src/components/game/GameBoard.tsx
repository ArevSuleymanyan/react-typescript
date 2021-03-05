import React, { useEffect, useState } from 'react'
import { GameCell } from './GameCell'
import GameService from '../../services/GameService'


const gameService = new GameService()
export const GameBoard: React.FunctionComponent = () => {
	let i = 0;
	const [board, setBoard] = useState([]);
	useEffect(()=>{
		// gameService.getGameInfo().then(result => setBoard(result))
		const getGameBoard = async () => await gameService.getGameInfo().then(result => setBoard(result))
		getGameBoard()
	},[])
	return (
		<div className='board'>
			{
				board.map((item) => {
					i++
					return (
						<GameCell key={i} item={item}/>
					)
				})
			}
		</div>
	)
}
