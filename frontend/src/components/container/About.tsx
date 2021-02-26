import React from 'react'

export const About: React.FC = () => (
	<div className='about '>
		<div className='about-content'>
			<p>
				Lines 98 classic game interface is a square of 9 horizontal lines, 9 vertical lines, creating 81 small squares.
				Mission Your arrangement is to have at least 5 balls of the same color lying on a horizontal, vertical or
				diagonal line to score. After each move will automatically generate 3 new balls with random colors and
				positions.
			</p>
		</div>
		<div className='center'>
			<button className='btn btn-secondary'>Home</button>
		</div>
	</div>
)
