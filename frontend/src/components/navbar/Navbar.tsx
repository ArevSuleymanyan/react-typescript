import React from 'react'
interface NavbarProps {
	menu: any[]
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
	return (
		<nav className='navbar'>
			<div>
				<a href='/'>LOGO</a>
			</div>
			<div className='menu'>
				<ul className='menu_list'>
					{menu.map((item) => {
						let path = item.title.replace(' ', '').toLowerCase()
						let href = '/' + path;
						if(item.isLoggedIn){
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
