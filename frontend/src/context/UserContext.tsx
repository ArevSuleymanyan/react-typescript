import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'


type Props = {
	children: React.ReactChild
}
interface UserProps {
	user: object
}


export const UserContext = React.createContext({})
const userService = new UserService()
export const UserProvider = ({ children }: Props) => {
	const [user, setUser] = useState({})
	const [avatar, setAvatar] = useState('')
	const changeUserContext = (data:object) => setUser(data)
	const changeAvatarContext = (data:string) => setAvatar(data)
	useEffect(() => {
		const userInfo = async () => {
			await userService.getUserInfo().then((result) =>  { 
				setUser(result.user)
				setAvatar(result.avatar)
			})

		}
		userInfo()
	}, [])
	
	return (
		 <UserContext.Provider value={{
			 user,
			 avatar,
			 changeUserContext,
			 changeAvatarContext,
		 }}>
			 {children}
			 </UserContext.Provider>
	)
}
