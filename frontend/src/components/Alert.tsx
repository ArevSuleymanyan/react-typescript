import React from 'react'
import { useAlert } from '../context/AlertContext'

interface AlertProps {
	message: string
}

export const Alert: React.FC<AlertProps> = ({ message }) => {
	const alert: any = useAlert()
	if (!alert.visible) return null
	return (
		<div className='alert alert-info' onClick={alert.toggle}>
			<p className='center'>
			<i className="icon fas fa-exclamation-triangle fa-lg"></i>
				<strong>{message}</strong>
			</p>
		</div>
	)
}
