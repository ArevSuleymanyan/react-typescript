import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService'

const userService = new UserService()

export const HomePage: React.FC = () => {
	const [user, setUser] = useState<any>({})
	useEffect(() => {
		// userService.getUserInfo().then(result => setUser(result))
	const userInfo = async() =>	await userService.getUserInfo().then(result => setUser(result))
        userInfo();
	}, [])
    if(user.id){
        return (
            <div>
                <div>Welcome Home Page {user.name}</div>
            </div>
        )
    } 
	return <div className="guest">Pleace log in</div>
}
