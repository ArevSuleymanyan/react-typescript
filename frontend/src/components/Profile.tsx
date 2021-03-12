import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserService from '../services/UserService'

const userService = new UserService()

export const Profile: React.FC = () => {
	const [file, setFile] = useState<any>()
	const { user, avatar , changeAvatarContext}:any = useContext(UserContext)
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files[0])
	}
	const onClickHandler = async (e: React.MouseEvent) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('avatar', file)
		formData.append('id', user.id)
		const pic = await userService.addPicture(formData);
		changeAvatarContext(pic.image)
	}


	return (
		<div className='profile'>
			<div className='profile-pic'>
				<img src={`http://localhost:3000/uploads/${avatar}`} alt='photo' />
			</div>
			<div>
				<form className='mb-5'>
					<input className='select-file' type='file' name='avatar' onChange={onChangeHandler} />
				</form>
				<button className='btn btn-primary' onClick={onClickHandler}>
					Upload
				</button>
			</div>
		</div>
	)
}
