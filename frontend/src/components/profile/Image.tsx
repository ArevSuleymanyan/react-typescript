import React from 'react';

export const Image :React.FC<{}> = ({src}:string) => {
    return (
        <img  src={src}/>
    )
}