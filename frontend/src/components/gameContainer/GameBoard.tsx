import React from 'react'
import { GameCell } from './GameCell'
import {board} from './board'

export const GameBoard: React.FunctionComponent = () => {
	let i = 0;
	// const board = [{color:'r',number:0},{color:'',number:0},{color:'',number:0},{color:'',number:0},{color:'r',number:0}]
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
