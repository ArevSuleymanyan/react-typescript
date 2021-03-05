import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const HomePage: React.FC = () => {
	const user: any = useContext(UserContext)
	if (user.id) {
		return (
			<div>
				<div className="guest">Welcome Home Page {user.name}</div>
			</div>
		)
	}
	return <div className='guest'>Pleace log in</div>
}
