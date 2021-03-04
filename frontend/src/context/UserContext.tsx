// import React, { useContext, useEffect, useState } from 'react'
// import UserService from '../services/UserService'

// const UserContext = React.createContext({})

// export const useUser = () => {
// 	return useContext(UserContext)
// }

// const userService = new UserService()

// export const UserContextProvider = ({ children }: any) => {
// 	const [user, setUser] = useState({})
// 	useEffect(() => {
// 		const userInfo = async () => {
// 			await userService.getUserInfo().then(data => setUser(data))
// 		}
// 		userInfo()
// 	}, [])
// 	return <UserContext.Provider value={user}>{children}</UserContext.Provider>
// }
