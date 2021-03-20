import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'

type Props = {
	children: React.ReactChild
}
interface UserProps {
	user:{
		id?: string
		name?: string
		email?: string
		password?: string
	}
	avatar: string
	changeUserContext?: (data: object) => void
	changeAvatarContext?: (data: string) => void
}

export const UserContext = React.createContext<UserProps>({
	user: {} ,
	avatar: '',
})

const userService = new UserService();

export const UserProvider = ({ children }: Props) => {
	const [user, setUser] = useState({})
	const [avatar, setAvatar] = useState('')
	const changeUserContext = (data: object) => setUser(data)
	const changeAvatarContext = (data: string) => setAvatar(data)
	useEffect(() => {
		const userInfo = async () => {
			await userService.getUserInfo().then((result) => {
				setUser(result.user)
				setAvatar(result.avatar)
			})
		}
		userInfo()
	}, [])

	return (
		<UserContext.Provider
			value={{
				user,
				avatar,
				changeUserContext,
				changeAvatarContext
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
