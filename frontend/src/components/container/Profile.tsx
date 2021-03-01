import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'

const userService = new UserService()

export const Profile: React.FC = () => {
	const [profile, setProfile] = useState<any>({})
	useEffect(() => {
        userService.getUserInfo().then(result => setProfile(result))
	}, [])

	return (
		<>
			<div className='profile-img'></div>
			<button className='add-photo'>add photo</button>
            <h1>{profile.name}</h1>
            
		</>
	)
}
