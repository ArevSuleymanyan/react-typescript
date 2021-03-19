import React from 'react'
type Props = {
	item: {
		color: string
	}
	clickHandler: (e:any) => void
	i: number
}

export const GameCell = ({ item, clickHandler, i }: Props) => {
	return <div className={'cell ' + item.color} id ={`${i - 1}`} onClick={clickHandler}></div>
}
