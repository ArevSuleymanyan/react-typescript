import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const HomePage: React.FC = () => {
	const {user}:any = useContext(UserContext);
	if(user && user.id){
		return (
			<div>
				<h1 className="guest">
					Welcome home page {user.name.toUpperCase()} !!!
				</h1>
				<div id="background-wrap">
					<div className="bubble x1"></div>
					<div className="bubble x2"></div>
					<div className="bubble x3"></div>
					<div className="bubble x4"></div>
					<div className="bubble x5"></div>
					<div className="bubble x6"></div>
					<div className="bubble x7"></div>
					<div className="bubble x8"></div>
					<div className="bubble x9"></div>
					<div className="bubble x10"></div>
				</div>
			</div>
		)
	}
	else {

	return (
	<>
		<div className='guest'>Pleace log in <i className="fas fa-sign-in-alt fa-lg"></i></div>
		<div id="background-wrap">
			<div className="bubble x1"></div>
			<div className="bubble x2"></div>
			<div className="bubble x3"></div>
			<div className="bubble x4"></div>
			<div className="bubble x5"></div>
			<div className="bubble x6"></div>
			<div className="bubble x7"></div>
			<div className="bubble x8"></div>
			<div className="bubble x9"></div>
			<div className="bubble x10"></div>
		</div>
	</>
	)
	}
}
