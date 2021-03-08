import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Profile: React.FC = () => {
	const {user}:any = useContext(UserContext);
	return (
		<>
			<div className='profile-img'>
				<label>Select a photo
					
				</label>
				<input type="file"/>
			</div>
			<p>Name: <strong>{user.name}</strong></p>
			<p>Email: <strong>{user.email}</strong></p>
		</>
	)
}

