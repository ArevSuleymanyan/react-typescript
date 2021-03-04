import React from 'react'
import { useUser } from '../../context/UserContext'


export const Profile: React.FC = () => {
	const user = useUser();
	console.log(user)
	return (
		<>
			<div className='profile-img'></div>
			<button className='add-photo'>add photo</button>
          
            
		</>
	)
}
