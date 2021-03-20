import React from 'react';

type ImgProps = {
    src: string
}

export const Image  = ({ src }:ImgProps) => {
    return (
        <img  src={src}/>
    )
}