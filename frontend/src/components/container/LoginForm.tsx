import React, { useState } from 'react'
import UserService from '../../services/UserService'

const userService = new UserService()

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const clickHandler = (event: React.MouseEvent) => {
		event.preventDefault()

		if (!email || !password) {
			alert('Please provide an email and password')
		}

		const user = userService.login(email, password)
		console.log(user)
		setEmail('')
		setPassword('')
	}

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault()
			console.log(email, password)
		}
	}
	return (
		<form className='ligin-form'>
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
					className='form-control'
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
	)
}
