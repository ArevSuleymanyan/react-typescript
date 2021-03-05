import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Profile: React.FC = () => {
	const user:any = useContext(UserContext);
	return (
		<>
			<div className='profile-img'></div>
			<button className='add-photo'>add photo</button>
			<p>Name: <strong>{user.name}</strong></p>
			<p>Email: <strong>{user.email}</strong></p>
		</>
	)
}

