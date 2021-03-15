import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../context/UserContext'
import LocalStorageService from '../services/LocalStorageService'
interface NavbarProps {
	menu: any[]
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
	const userData: any = useContext(UserContext)
	let history = useHistory()
	const logoutHandler = () => {
		LocalStorageService.removeToken('token')
		userData.changeUserContext({})
		history.push('/')
	}
	const clickHandler = (e:React.MouseEvent) => {
		history.push('/')
	}
	return (
		<nav className='navbar'>
			<div>
			<i className="fas fa-gamepad fa-2x" onClick={clickHandler} ></i>
			</div>
			<div className='menu'>
				<ul className='menu_list'>
					{menu.map((item) => {
						if (item.title === 'LOG OUT') {
							return (
								<li key={item.id} className='menu_item' title='Log out' onClick={logoutHandler}>
									<a className='menu_link'  href={item.path}>
									<i className="fas fa-power-off" ></i>
									</a>
								</li>
							)
						}

						return (
							<li key={item.id} className='menu_item'>
								<a className='menu_link' href={item.path}>
									{item.title}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
