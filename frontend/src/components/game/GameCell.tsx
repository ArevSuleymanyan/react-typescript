import React from 'react'

export const GameCell: React.FC<{ item: any }> = ({ item, clickHandler, i }) => {
        
 return (
         <div className={'cell ' + item.color} id={i-1} onClick={clickHandler}></div> 
 )
}
