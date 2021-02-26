import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { LoginForm } from './components/container/LoginForm'
import { RegisterForm } from './components/container/RegisterForm'
import { About } from './components/container/About'
import { HomePage } from './components/container/HomePage'

const App: React.FC = () => {
	const menu = [
		{ title: 'LOGIN', id: 1 },
		{ title: 'REGISTER', id: 2 },
		{ title: 'ABOUT', id: 3 }
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
