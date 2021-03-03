import React, { useState, useEffect } from 'react'
import LocalStorageService from '../../services/LocalStorageService'
import UserService from '../../services/UserService'

const userService = new UserService()

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	// const [user, setUser] = useState<string>('')

	const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const clickHandler =  async (event: React.MouseEvent) => {
		event.preventDefault()
		if (!email || !password) {
			alert('Please provide an email and password');
			return
		}
		// userService.login(email, password).then(result => {
		// 	setUser(result);
		// });

		const user = await userService.login(email, password);
		console.log(user)
	}

	const keyPressHandler = (event: React.KeyboardEvent) => {
	// 	if (event.key === 'Enter') {
	// 		event.preventDefault()
	// 		if (!email || !password) {
	// 			alert('Please provide an email and password');
	// 		}
	// 	}
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
	)
}
