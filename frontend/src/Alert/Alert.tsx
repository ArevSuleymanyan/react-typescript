import React from 'react'
import { useAlert } from '../Alert/AlertContext'

export const Alert: React.FC = () => {
	const alert = useAlert()

	if (!alert.visible) return null

	return (
		<div className='alert alert-info' onClick={alert.toggle}>
			<p className='center'>
				<strong>message</strong>
			</p>
		</div>
	)
}
