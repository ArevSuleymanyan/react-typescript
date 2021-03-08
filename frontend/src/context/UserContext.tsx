import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'

export const UserContext = React.createContext({})

const userService = new UserService()
export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState({})
	const changeUserContext = (data:any) => setUser(data)
	useEffect(() => {
		const userInfo = async () => {
			await userService.getUserInfo().then((result) =>  { 
				setUser(result)})
		}
		userInfo()
	}, [])

	return (
		 <UserContext.Provider value={{
			 user,
			 changeUserContext
		 }}>
			 {children}
			 </UserContext.Provider>
	)
}
