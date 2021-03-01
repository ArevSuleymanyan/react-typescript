import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService'

const userService = new UserService()

export const HomePage: React.FC = () => {
	const [user, setUser] = useState<any>({})
    
	useEffect(() => {
		userService.getUserInfo().then(result => setUser(result))
	}, [])
    if(user.id){
        return (
            <div>
                <div>Welcome Home Page {user.name}</div>
            </div>
        )
    } 
	return <div>Pleace log in</div>
}
