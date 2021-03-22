import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import UserService from '../../services/UserService'
import { Image } from './Image'
const userService = new UserService()

export const Profile: React.FC = () => {
	const [file, setFile] = useState<string>('')
	const [visible, setVisible] = useState(true)
	const { user, avatar, changeAvatarContext } = useContext(UserContext)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => {
		setFile(e.currentTarget.files[0])
	}
	const onClickHandler = async (e: React.MouseEvent) => {
		e.preventDefault()
		const formData = new FormData()
		if (!file) {
			setVisible(!visible)
			return
		}
		formData.append('avatar', file)
		formData.append('id', user.id)
		const pic = await userService.addPicture(formData)
		changeAvatarContext && changeAvatarContext(pic.image)
		setVisible(!visible)
	}
	const visibilityClick = () => setVisible(!visible)
	const src = `http://localhost:3000/uploads/${avatar}`

	return (
		<div className='profile'>
			<div className='img-section'>
				<div className='profile-pic' onClick={visibilityClick}>
					{avatar && <Image src={src} />}
				</div>
				<div>
					<form className='mb-5'>
						<input hidden={visible} className='select-file' type='file' name='avatar' onChange={onChangeHandler} />
					</form>
					<button className='btn btn-primary' onClick={onClickHandler}>
						Upload
					</button>
				</div>
			</div>
			<div className='info-section'>
				<p>{user.name}</p>
				<p>{user.email}</p>
				
			</div>
		</div>
	)
}
