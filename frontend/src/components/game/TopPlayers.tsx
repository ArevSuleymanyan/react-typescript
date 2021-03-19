import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const TopPlayers: React.FC = () => {
	const { players }: any = useContext(GameContext)
	let i = 0
	return (
		<div className='top-players'>
			<p className='top-title'>TOP PLAYERS</p>
			<ul>
				{players.map((player: any) => {
					i++
					return (
						<li className='top-list' key={player.name + player.score}>
							<span className='top-i'>{i}. &nbsp;</span>
							<span className='top-name'>{player.name}</span>
							<span className='top-score'>{player.score || 0}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
