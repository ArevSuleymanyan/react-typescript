import React, { useState, useEffect } from 'react'

export const Game: React.FC = () => {
	const [game, setGame] = useState<any[]>([])

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}
		fetch('http://localhost:3000/api/game', requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				setGame(result)
			})
	}, [])
	let i = 0

	return (
		<div>
			{game.map((item) => {
				i++
				return (
					<div className='cell' key={i}>
						{item.number}
					</div>
				)
			})}
		</div>
	)
}
