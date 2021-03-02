import React from 'react';
import LocalStorageService from '../../services/LocalStorageService'
interface NavbarProps {
	menu: any[]
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
	const token = LocalStorageService.getToken('token')
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
						if (token && item.isLoggedIn) {
							return (
								<li key={item.id} className='menu_item'>
									<a className='menu_link' href={href}>
										{item.title}
									</a>
								</li>
							)
						}
						if(!token && !item.isLoggedIn){
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


