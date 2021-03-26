import React, { useContext, useState } from 'react'
import { GameContext } from '../../context/GameContext'
import '../../styles/game.scss'

export const GameLevel = () => {
	const { changeLevel} = useContext(GameContext)
	const [lvl, setLvl] = useState(3)
	const clickHandler = (e:any) => {
		changeLevel && changeLevel(Number(e.target.value))
		setLvl(Number(e.target.innerHTML))
	}
	return (
		<div className='top-players'>
			<p className='top-title'>LEVEL - {lvl}</p> 
			<div className='center'>
				<button className='btn-lvl' title='Removes 5 elements' value='5' onClick={clickHandler}>
					1
				</button>
			</div>
			<div className='center'>
				<button className='btn-lvl' title='Removes 4 elements' value='4' onClick={clickHandler} >
					2
				</button>
			</div>
			<div className='center'>
				<button className='btn-lvl' title='Removes 3 elements' value='3' onClick={clickHandler}>
					3
				</button>
			</div>
		</div>
	)
}
