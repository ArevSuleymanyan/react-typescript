import React from 'react'

export const GameCell: React.FC<{ item: any }> = ({ item }) => <div className={'cell ' + item.color}></div>
