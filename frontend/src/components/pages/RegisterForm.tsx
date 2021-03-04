import React, { useState } from 'react'
import { Alert } from './Alert'
import { useAlert } from '../../context/AlertContext'
import UserService from '../../services/UserService'

const userService = new UserService()

export const RegisterForm: React.FC = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [message, setMesage] = useState<string>('')
	const { visible, toggle }: any = useAlert()


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

	const clickHandler = async (event: React.MouseEvent) => {
		event.preventDefault()
		if (!name || !email || !password || !confirmPassword) {
			if (!visible) {
				setMesage('Fill in all fields')
				toggle()
			}
			return
		}
		const data = await userService.register(name, email, password, confirmPassword)
		if (!visible) {
			setMesage(data.message)
			toggle()
		}
	}
	const keyPressHandler = async (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault()
			if (!name || !email || !password || !confirmPassword) {
				if (!visible) {
					setMesage('Fill in all fields')
					toggle()
				}
				return
			}
			const data = await userService.register(name, email, password, confirmPassword)
			if (!visible) {
				setMesage(data.message)
				toggle()
			}
		}
	}

	let namePlc = 'The name must be a minimum of 4 characters long and not start with a number.'
	let emailPlc = 'The email field must be an email address.'
	let passwordPlc = 'The password must be a minimum of four characters long.'
	let confirmPassPlc = 'Please confirm the password.'
	return (
		<>
			<form className='login-form mb-5'>
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
			<Alert message={message} />
		</>
	)
}
