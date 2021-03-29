import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect, useHistory, useLocation, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LoginPage } from './components/pages/LoginPage'
import { RegisterPage } from './components/pages/RegisterPage'
import { About } from './components/pages/About'
import { HomePage } from './components/pages/HomePage'
import { Profile } from './components/profile/Profile'
import { GameBoard } from './components/game/GameBoard'
import { AlertProvider } from './context/AlertContext'
import { UserContext } from './context/UserContext'
import { GameProvider } from './context/GameContext'
import { FourOhFour } from './components/pages/FourOhFour'
import { LogoutPage } from './components/pages/LogoutPage'

const App: React.FC = () => {
	const { user }: any = useContext(UserContext)
	const menu = [
		{ title: 'LINES', id: 1, isLoggedIn: false, component: HomePage, path: '/' },
		{ title: 'LOGIN', id: 2, isLoggedIn: false, component: LoginPage, path: '/login' },
		{ title: 'REGISTER', id: 3, isLoggedIn: false, component: RegisterPage, path: '/register' },
		{ title: 'ABOUT', id: 4, isLoggedIn: false, component: About, path: '/about' },
		{ title: 'PROFILE', id: 5, isLoggedIn: true, component: Profile, path: '/profile' },
		{ title: 'GAME', id: 6, isLoggedIn: true, component: GameBoard, path: '/game' },
		{ title: 'LOG OUT', id: 7, isLoggedIn: true, component: '', path: '/' }
	]

	const currentMenu = menu.filter((item: any) => {
		if (item.title === 'LINES') {
			return item
		}
		if (user && user.user_id) {
			return item.isLoggedIn && item
		} else {
			return !item.isLoggedIn && item
		}
	})

	return (
		<GameProvider>
			<AlertProvider>
				<Router>
					<Navbar menu={currentMenu} />
					<div className='container'>
						<Switch>
							{currentMenu.map((item: any) => {
								if (item.title === 'LINES') {
									return <Route key={item.id} exact path={item.path} component={item.component} />
								}
								return <Route key={item.id} path={item.path} component={item.component} />
							})}
							<Route component={FourOhFour} />
						</Switch>
					</div>
				</Router>
			</AlertProvider>
		</GameProvider>
	)
}

export default App
