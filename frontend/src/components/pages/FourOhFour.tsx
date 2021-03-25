import React from 'react'
import '../../styles/404.scss'

export const FourOhFour = () => {
	return (
		<div>
			<p className='zoom-area'></p>
			<section className='error-container'>
				<span>4</span>
				<span>
					<span className='screen-reader-text'>0</span>
				</span>
				<span>4</span>
			</section>
			<div className='link-container'>
				<a
					href='/'
					className='more-link'
				>
					LINES
				</a>
			</div>
		</div>
	)
}
