import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { LoginForm } from './components/container/LoginForm'
import { RegisterForm } from './components/container/RegisterForm'
import { About } from './components/container/About'
import { HomePage } from './components/container/HomePage'
import { Profile } from './components/container/Profile'
import {GameBoard} from './components/gameContainer/GameBoard'

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
