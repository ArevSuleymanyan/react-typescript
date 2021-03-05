import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'

const userService = new UserService()
export const Profile: React.FC = () => {
	const [user, setUser] = useState<any>({})
	useEffect( ()=>{
		//  userService.getUserInfo().then(result => setUser(result))
		 const userInfo = async () => await userService.getUserInfo().then(result => setUser(result));
		 userInfo()
	},[])
	
	return (
		<>
			<div className='profile-img'></div>
			<button className='add-photo'>add photo</button>
			<p>Name: <strong>{user.name}</strong></p>
			<p>Email: <strong>{user.email}</strong></p>
		</>
	)
}
