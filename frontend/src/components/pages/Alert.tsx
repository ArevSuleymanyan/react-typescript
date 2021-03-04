import React from 'react'
import { useAlert } from '../../context/AlertContext'

export const Alert: React.FC = (props:any) => {
	const alert:any = useAlert()

	if (!alert.visible) return null

	return (
		<div className='alert alert-info' onClick={alert.toggle}>
			<p className='center'>
				<strong>{props.message}</strong>
			</p>
		</div>
	)
}
