import React, { useEffect, useState } from 'react'
import GameService from '../services/GameService'

type Props = {
	children: React.ReactChild
}
interface GameProps {
	board: object[]
	players: object[]
    score: number
	changeBoard: (data: object[]) => void
	changeScore: (data: number) => void
}

export const GameContext = React.createContext<GameProps | {}>({})
const gameService = new GameService()

export const GameProvider = ({ children }: Props) => {
	const [board, setBoard] = useState([])
	const [players, setPlayers] = useState([])
	const [score, setScore] = useState(0)

	const changeScore = (scr: number) => {
		setScore(scr)
	}
	const changeBoard = (data: any) => {
		setBoard(data)
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
				changeBoard,
				changeScore
			}}
		>
			{children}
		</GameContext.Provider>
	)
}
