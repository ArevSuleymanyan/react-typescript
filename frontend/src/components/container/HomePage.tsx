import React, { useState, useEffect } from 'react'

export const HomePage: React.FC = () => {
	const token = localStorage.getItem('token')
	const [user, setUser] = useState<any>({})
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
	useEffect(() => {
		fetch('http://localhost:3000/api/user', requestOptions)
			.then((response) => response.json())
			.then((result) => setUser(result))
	}, [])
    if(user.id){
        return (
            <div>
                <div>{user.id}</div>
                <div>{user.email}</div>
                <div>{user.name}</div>
                <div>{user.password}</div>
            </div>
        )
    } 
	return <div>{'Home Page'}</div>
}
