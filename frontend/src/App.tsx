import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LoginForm } from './components/pages/LoginForm'
import { RegisterForm } from './components/pages/RegisterForm'
import { About } from './components/pages/About'
import { HomePage } from './components/pages/HomePage'
import { Profile } from './components/Profile'
import { GameBoard } from './components/game/GameBoard'
import { AlertProvider } from './context/AlertContext'
import { UserContext } from './context/UserContext'
import { GameProvider } from './context/GameContext'

const App: React.FC = () => {
	const user = useContext(UserContext);
	const menu = [
		{ title: 'LOGIN', id: 1, isLoggedIn: false },
		{ title: 'REGISTER', id: 2, isLoggedIn: false },
		{ title: 'ABOUT', id: 3, isLoggedIn: false },
		{ title: 'PROFILE', id: 4, isLoggedIn: true },
		{ title: 'GAME', id: 5, isLoggedIn: true },
		{ title: 'LOG OUT', id: 6, isLoggedIn: true }
	]
	// currentMenu = menu.filter

	return (
		<GameProvider>
		<AlertProvider>
			<Router>
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
			</Router>
		</AlertProvider>
		</GameProvider>
	)
}

export default App
