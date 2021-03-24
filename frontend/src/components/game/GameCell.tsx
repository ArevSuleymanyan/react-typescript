import React from 'react'
type Props = {
	item: {
		color: string
	}
	clickHandler: (e:React.MouseEvent) => void
	i: number
}

export const GameCell = ({ item, clickHandler, i }: Props) => {
	return <div className={'cell ' + item.color} id ={`${i}`} onClick={clickHandler}>{i}</div>
}
