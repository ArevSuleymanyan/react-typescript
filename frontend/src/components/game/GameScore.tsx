import React from 'react'

type Props = {
	score: number
}
export const GameScore: JSX.Element = ({ score }: Props) => {
	return (
		<div className='top-players'>
			<p className='top-title'>SCORE</p>
			<div className='score'>{score}</div>
		</div>
	)
}
