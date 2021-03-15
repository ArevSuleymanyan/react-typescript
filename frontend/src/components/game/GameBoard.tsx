import React, { useContext, useState } from 'react'
import { GameContext } from '../../context/GameContext'
import { GameCell } from './GameCell'
import { TopPlayers } from './TopPlayers'

export const GameBoard: React.FunctionComponent = () => {
	const {board, changeBoard} = useContext(GameContext);

	const [classes, setClasses] = useState('')
	const [key , setKey] = useState('')
	const cellClick = (e:React.MouseEvent):any => {
		setKey(prev => prev = e.target.id)
		// console.log(e.target.classList.add('g'))
	}

	
	
	
	let i:number = 0
	// console.log('key : ',key ,'classes : ',classes)
	return (
		<>
			<TopPlayers />
			<div className='board'>
				{board.map((item:any) => {
					i++
					return <GameCell key={i} item={item}  i={i} clickHandler={cellClick}  />
				})}
			</div>
		</>
	)
}
