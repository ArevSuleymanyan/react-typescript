import React, { useState } from 'react'

export const RegisterForm: React.FC = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')

	const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}
	const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const passChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}
	const confirmPassChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(event.target.value)
	}

	const clickHandler = () => {
		console.log(name, email, password, confirmPassword)
		setName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}
	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault()
			console.log(name, email, password, confirmPassword)
			setName('')
			setEmail('')
			setPassword('')
			setConfirmPassword('')
		}
	}

	let namePlc = 'The name must be a minimum of 4 characters long and not start with a number.'
	let emailPlc = 'The email field must be an email address.'
	let passwordPlc = 'The password must be a minimum of four characters long.'
	let confirmPassPlc = 'Please confirm the password.'
	return (
		
		<form className='ligin-form'>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					type='text'
					value={name}
					onChange={nameChangeHandler}
					className='form-control'
					id='name'
					placeholder={namePlc}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='email' className='form-label'>
					Email
				</label>
				<input
					type='email'
					value={email}
					onChange={emailChangeHandler}
					className='form-control'
					id='email'
					placeholder={emailPlc}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='password' className='form-label'>
					Password
				</label>
				<input
					type='password'
					value={password}
					onChange={passChangeHandler}
					className='form-control'
					id='password'
					placeholder={passwordPlc}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='confirmPassword' className='form-label'>
					Confirm Password
				</label>
				<input
					type='password'
					value={confirmPassword}
					onChange={confirmPassChangeHandler}
					onKeyPress={keyPressHandler}
					className='form-control'
					id='confirmPassword'
					placeholder={confirmPassPlc}
				/>
			</div>
			<div className='center'>
				<button onClick={clickHandler} className='btn btn-primary'>
					Reagister
				</button>
			</div>
		</form>
	)
}
