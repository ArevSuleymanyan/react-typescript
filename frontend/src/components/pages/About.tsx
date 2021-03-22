import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
	let history = useHistory()
	const clickHandler = () => {
		history.push('/')
	}

	return (
		<div className='about mt-5 '>
			<div className='about-content'>
				<p>
					Lines 98 classic game interface is a square of <b>9</b> horizontal lines, <b>9</b> vertical lines, creating
					<b>81</b> small squares. Mission Your arrangement is to have at least <b>3</b> balls of the same color lying
					on a horizontal, vertical or diagonal line to score. After each move will automatically generate <b>3</b> new
					balls with random colors and positions.
				</p>
			</div>
			<div className='center'>
				<button className='btn btn-primary ' onClick={clickHandler}>
					LINES
				</button>
			</div>
		</div>
	)
}
