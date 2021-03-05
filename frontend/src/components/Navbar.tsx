import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import LocalStorageService from '../services/LocalStorageService'
interface NavbarProps {
	menu: any[]
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
	const token = LocalStorageService.getToken('token');
	const user:any = useContext(UserContext);

	const logoutHandler = () => {
		LocalStorageService.removeToken('token')
	}
	return (
		<nav className='navbar'>
			<div>
				<a href='/'>LINES</a>
			</div>
			<div className='menu'>
				<ul className='menu_list'>
					{menu.map((item) => {
						let path = item.title.replace(' ', '').toLowerCase()
						let href = '/' + path
						// if (token && item.isLoggedIn) {
						if (user.id && item.isLoggedIn) {
							if(item.title === 'LOG OUT'){
								return (
									<li key={item.id} className='menu_item' onClick={logoutHandler}>
										<a className='menu_link' href={href}>
											{item.title}
										</a>
									</li>
								)
							}
							return (
								<li key={item.id} className='menu_item'>
									<a className='menu_link' href={href}>
										{item.title}
									</a>
								</li>
							)
						}
						if(!user.id && !item.isLoggedIn){
							return (
								<li key={item.id} className='menu_item'>
									<a className='menu_link' href={href}>
										{item.title}
									</a>
								</li>
							)
						}
					})}
				</ul>
			</div>
		</nav>
	)
}


