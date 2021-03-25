import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import '../../styles/game.scss'

export const GameLevel = () => {
	const {level, changeLevel} = useContext(GameContext)

	const clickHandler = (e:any) => {
		changeLevel && changeLevel(Number(e.target.value))
	}
	return (
		<div className='top-players'>
			<p className='top-title'>LEVEL</p>
			<div className='center'>
				<button className='btn-lvl' value='5' onClick={clickHandler}>
					1
				</button>
			</div>
			<div className='center'>
				<button className='btn-lvl' value='4' onClick={clickHandler} >
					2
				</button>
			</div>
			<div className='center'>
				<button className='btn-lvl' value='3' onClick={clickHandler}>
					3
				</button>
			</div>
		</div>
	)
}
