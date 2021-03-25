import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

type Props = {
	players: object[]
}

export const TopPlayers = ({ players }: Props) => {
	const { user } = useContext(UserContext)
	let i = 0
	return (
		<div className='top-players'>
			<p className='top-title'>TOP PLAYERS</p>
			<ul>
				{players.map((player: any) => {
					i++
					let cls = ''
					if (user.name === player.name) {
						cls = 'line'
					}
					return (
						<li className='top-list' key={player.name + player.score}>
							<span className='top-i'>{i}. &nbsp;</span>
							<span className={'top-name ' + cls}>{player.name}</span>

							<span className='top-score'>{player.score || 0}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
