import React, { useState } from 'react'
import LocalStorageService from '../../services/LocalStorageService'
import UserService from '../../services/UserService'
import { Alert } from '../Alert'
import { useAlert } from '../../context/AlertContext'
import { Redirect, useHistory } from 'react-router-dom'

const userService = new UserService()

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const { visible, toggle }: any = useAlert()
	let history = useHistory()

	const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const clickHandler = async (event: React.MouseEvent) => {
		event.preventDefault()
		if (!email || !password) {
			if (!visible) {
				setMessage('Please provide an email and password')
				toggle()
			}
			return
		}

		const user = await userService.login(email, password)
		if (user.token) {
			LocalStorageService.setToken(user.token)
			history.push('/')
		} else {
			if (!visible) {
				setMessage(user.message)
				toggle()
			}
			return
		}
	}

	const keyPressHandler = async (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault()
			if (!email || !password) {
				if (!visible) {
					setMessage('Please provide an email and password')
					toggle()
				}
				return
			}
			const user = await userService.login(email, password)
			if (user.token) {
				LocalStorageService.setToken(user.token)
				history.push('/')
			} else {
				if (!visible) {
					setMessage(user.message)
					toggle()
				}
				return
			}
		}
	}
	return (
		<>
			<form className='login-form mb-5'>
				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						value={email}
						onChange={emailChangeHandler}
						className='form-control'
						id='email'
						placeholder='Email address'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						className={'form-control'}
						id='password'
						type='password'
						value={password}
						onChange={passwordChangeHandler}
						onKeyPress={keyPressHandler}
						placeholder='Password'
					/>
				</div>
				<div className='center'>
					<button onClick={clickHandler} className='btn btn-primary '>
						Login
					</button>
				</div>
			</form>
			<Alert message={message} />
		</>
	)
}