import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserService from '../services/UserService'

const userService = new UserService();

export const Profile: React.FC = () => {
	const { user }: any = useContext(UserContext);
	// const [file, setFile] = useState(null)
	// const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setFile(e.target.files[0])
	// }
	// const fileUploadHandler = async () =>{
	// 	console.log(user.id, file.name)
	// 	await userService.addPicture(user.id, file.name)
	// }
	return (
		<>
			{/* <div className='profile-img'>
				<input type="file" onChange={fileSelectedHandler}/>
				<button className="btn btn-warning" onClick={fileUploadHandler}>Upload</button>
			</div> */}
			<hr/>
			<div>
				<p>
					Name: <strong>{user.name}</strong>
				</p>
				<p>
					Email: <strong>{user.email}</strong>
				</p>
			</div>
		</>
	)
}
