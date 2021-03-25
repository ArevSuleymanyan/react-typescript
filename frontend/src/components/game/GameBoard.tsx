import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext'
import { GameCell } from './GameCell'
import { TopPlayers } from './TopPlayers'
import { GameScore } from './GameScore'
import LinesLogic from '../../game/LinesLogic'
import GameService from '../../services/GameService'
import { UserContext } from '../../context/UserContext'
import { Popup } from '../Popup'
import { GameLevel } from './GameLevel'

const linesLogic = new LinesLogic()
const gameService = new GameService()

export const GameBoard: React.FC = () => {
	const { board, score, players, level, changeScore, changeBoard } = useContext(GameContext)
	const { user } = useContext(UserContext)
	const [color, setColor] = useState<string>('')
	const [first, setFirst] = useState<number>(-1)
	const [endGame, setEndGame] = useState<boolean>(false)
	linesLogic.points = score
	const closeHandler = () => {
		setEndGame((prev) => !prev)
		reloadHandler()
	}
	const saveHandler = async () => {
		if (user && user.id) await gameService.addBoard(user.id, board, score)
	}
	const reloadHandler = () => {
		linesLogic.resetData()
		linesLogic.runGame(linesLogic.board, level)
		changeBoard && changeBoard(linesLogic.board)
		changeScore && changeScore(0)
	}

	const cellClick = (e: any) => {
		let id = Number(e.target.id)
		if (e.target.classList.length > 1) {
			setFirst((prev) => (prev = id))
			setColor(e.target.classList[1])
		} else if (color) {
			linesLogic.moveTheColor(first, id, color, board,level, () => {
				changeScore && changeScore(linesLogic.points)
				if (linesLogic.checkEndGame(board)) {
					setEndGame((prev) => !prev)
				}
			})

			setColor('')
			setFirst(-1)
		}
	}
	return (
		<>
			<div className='score-box'>
				<TopPlayers players={players} />
				<GameScore score={score} />
				<GameLevel/>
			</div>
			<div className='board'>
				{board.map((item: { color: string }, i: number) => {
					return <GameCell key={i} item={item} i={i} clickHandler={(e: any) => cellClick(e)} />
				})}
			</div>
			<div className='btn-box mb-3'>
				<button onClick={saveHandler} className='btn-game btn btn-success'>
					<i className='fas fa-save fa-lg'></i>
				</button>
				<button onClick={reloadHandler} className='btn-game btn btn-info'>
					<i className='fas fa-sync-alt fa-lg'></i>
				</button>
			</div>
			{endGame ? <Popup closeHandler={closeHandler} score={score} /> : null}
		</>
	)
}
