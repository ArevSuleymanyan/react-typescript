import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext'
import { GameCell } from './GameCell'
import { TopPlayers } from './TopPlayers'
import {GameScore} from './GameScore'
import LinesLogic from '../../game/LinesLogic'

const linesLogic = new LinesLogic()

export const GameBoard: React.FunctionComponent = () => {
	let i: number = 0
	const { board } = useContext(GameContext);
	console.log('board:', board)
	const [color, setColor] = useState<string>('')
	const [first, setFirst] = useState(-1)
	const [second, setSecond] = useState(-1)

	useEffect(() => {
		linesLogic.runGame(board)
	}, [])

	const cellClick = (e) => {
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
	}

	console.log({ first, second, color })

	return (
		<>
			<div className="score-box">
				<TopPlayers />
				<GameScore/>
			</div>

			<div className='board'>
				{board.map((item: any) => {
					i++
					return <GameCell key={i} item={item} i={i} clickHandler={(e) => cellClick(e)} />
				})}
			</div>
		</>
	)
}
