import React, { useEffect, useState } from 'react'
import GameService from '../services/GameService'

type Props = {
	children: React.ReactChild
}
interface GameProps {
	board: { color: string; number: number }[]
	players: object[]
	score: number
	level: number
	changeBoard?: (data: object[]) => void
	changeScore?: (data: number) => void
	changeLevel?: (data: number) => void
}

export const GameContext = React.createContext<GameProps>({
	board: [],
	players: [],
	score: 0,
	level: 3
})
const gameService = new GameService()

export const GameProvider = ({ children }: Props) => {
	const [board, setBoard] = useState<{ color: string; number: number }[]>([])
	const [players, setPlayers] = useState<object[]>([])
	const [score, setScore] = useState<number>(0)
	const [level, setLevel] = useState(3)

	const changeScore = (scr: number) => {
		setScore(scr)
	}
	const changeBoard =  (data: any) => {
		 setBoard(data)
	}
	const changeLevel = (data: number) => {
		setLevel(data)
	}

	const changeTopPlayers = (pl:{name:string, score:number}[], nm:string, scr:number) => {
		for (let i = 0; i < pl.length; i++) {
			if(pl[i].name = nm){
				pl[i].score = scr
			}			
		}
		setPlayers(pl)
	}

	useEffect(() => {
		const getGameBoard = async () => {
			await gameService.getGameInfo().then((result) => {
				setBoard(result.board)
				setPlayers(result.players)
				setScore(result.score)
			})
		}
		getGameBoard()
	}, [])
	return (
		<GameContext.Provider
			value={{
				board,
				players,
				score,
				level,
				changeLevel,
				changeBoard,
				changeScore,
			}}
		>
			{children}
		</GameContext.Provider>
	)
}
