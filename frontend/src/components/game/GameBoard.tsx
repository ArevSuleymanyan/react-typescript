import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { GameCell } from './GameCell'
import { TopPlayers } from './TopPlayers'

export const GameBoard: React.FunctionComponent = () => {
	let i = 0
	const { board }: any = useContext(GameContext)
	return (
		<>
			<TopPlayers />
			<div className='board'>
				{board.map((item:any) => {
					i++
					return <GameCell key={i} item={item} />
				})}
			</div>
		</>
	)
}
