import React from 'react'

type Props = {
	closeHandler: () => void
	score: number
}

export const Popup = ({ closeHandler, score }: Props) => {
	return (
		<div>
			<div className='popup'>
				<div className='popup_open'>
					<p className='game-over'>GAME OVER</p>
					<p className="game-over">Your score is: {score}</p>
					<button onClick={closeHandler} className='btn btn-primary pp-btn'>
						New Game
					</button>
				</div>
			</div>
		</div>
	)
}
