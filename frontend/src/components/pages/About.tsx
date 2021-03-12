import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
	let history = useHistory();
	const clickHandler = () => {
		history.push('/')
	}
	

	return (
		<div className='about mt-5 '>
			<div className='about-content'>
				<p>
					Lines 98 classic game interface is a square of 9 horizontal lines, 9 vertical lines, creating 81 small
					squares. Mission Your arrangement is to have at least 5 balls of the same color lying on a horizontal,
					vertical or diagonal line to score. After each move will automatically generate 3 new balls with random colors
					and positions.
				</p>
			</div>
			<div className='center'>
				{/* <button className='btn btn-primary ' onClick={clickHandler}>LINES</button> */}
			</div>
		</div>
	)
}
