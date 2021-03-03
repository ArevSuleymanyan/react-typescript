import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { LoginForm } from './components/pages/LoginForm'
import { RegisterForm } from './components/pages/RegisterForm'
import { About } from './components/pages/About'
import { HomePage } from './components/pages/HomePage'
import { Profile } from './components/profile/Profile'
import {GameBoard} from './components/game/GameBoard'




const App: React.FC = () => {
	const menu = [
		{ title: 'LOGIN', id: 1, isLoggedIn: false },
		{ title: 'REGISTER', id: 2, isLoggedIn: false },
		{ title: 'ABOUT', id: 3, isLoggedIn: false },
		{ title: 'PROFILE', id: 4, isLoggedIn: true },
		{ title: 'GAME', id: 5, isLoggedIn: true },
		{ title: 'LOG OUT', id: 6, isLoggedIn: true }
	]

	return (
		<Router>
			<>
				<Navbar menu={menu} />
				<div className='container'>
					<Switch>
						<Route path='/login'>
							<LoginForm />
						</Route>
						<Route path='/register'>
							<RegisterForm />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/profile'>
							<Profile />
						</Route>
						<Route path='/game'>
							<GameBoard />
						</Route>
						<Route path='/logout'>
							<Redirect to='/' />
						</Route>
						<Route path='/'>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</>
		</Router>
	)
}

export default App
