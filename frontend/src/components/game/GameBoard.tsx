import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext'
import { GameCell } from './GameCell'
import { TopPlayers } from './TopPlayers'
import { GameScore } from './GameScore'
import LinesLogic from '../../game/LinesLogic'
import GameService from '../../services/GameService'
import { UserContext } from '../../context/UserContext'

const linesLogic = new LinesLogic()
const gameService = new GameService()

export const GameBoard: React.FC = () => {
	const { board, score, changeScore, changeBoard } = useContext(GameContext)
	const { user } = useContext(UserContext)
	const [color, setColor] = useState<string>('')
	const [first, setFirst] = useState<number>(-1)
	const [second, setSecond] = useState<number>(-1)

	const saveHandler = async () => {
		if (user && user.id) await gameService.addBoard(user.id, board, score)
		
	}

	const reloadHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		linesLogic.endGame = !linesLogic.endGame
		linesLogic.resetData()
		linesLogic.runGame(linesLogic.board)
		changeBoard && changeBoard(linesLogic.board)
		changeScore && changeScore(0)
	}

	const cellClick = (e: any) => {
		let id = Number(e.target.id)
		if (e.target.classList.length > 1) {
			setFirst((prev) => (prev = id))
			setColor(e.target.classList[1])
		} else if (color) {
			setSecond((prev) => (prev = id))
		}
		
	}

	if (color && second >= 0) {
		linesLogic.moveTheColor(first, second, color, board)
		// changeScore && changeScore(linesLogic.points)
		setFirst(-1)
		setSecond(-1)
		setColor('')
	}

	return (
		<>
			<div className='score-box'>
				<TopPlayers />
				<GameScore score={score} />
			</div>
			<div className='board'>
				{board.map((item: { color: string }, i: number) => {
					return <GameCell key={i} item={item} i={i} clickHandler={(e: any) => cellClick(e)} />
				})}
			</div>
			<div className='btn-box mb-3'>
				<button onClick={saveHandler} className='btn-game btn btn-success'>
					SAVE
				</button>
				<button onClick={reloadHandler} className='btn-game btn btn-info'>
					RELOAD
				</button>
			</div>
		</>
	)
}
