import React from 'react'
type Props = {
        item: {
                color:string
        },
        clickHandler: () => void,
        i: number
}

export const GameCell: React.FC = ({ item, clickHandler, i }:Props) => {

 return (
         <div className={'cell ' + item.color} id={i-1} onClick={clickHandler}></div> 
 )
}
