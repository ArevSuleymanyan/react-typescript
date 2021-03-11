import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserService from '../services/UserService'

const userService = new UserService();

export const Profile: React.FC = () => {
	const [file, setFile] = useState<any>()
	const { user }  = useContext(UserContext)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files[0])
	}
	const onClickHandler = async (e:React.MouseEvent) => {
		e.preventDefault();
		const formData = new FormData()
		formData.append('avatar', file)
		const pic = await userService.addPicture(formData)
		console.log(pic)
	}

	return (
		<form>
			<input type='file' name='avatar' onChange={onChangeHandler} />
			<button className='btn btn-success' onClick={onClickHandler}>
				Upload
			</button>
		</form>
	)
}
