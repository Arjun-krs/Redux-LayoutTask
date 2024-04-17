import React from "react";

function Images(props) {
    const { src, className , width,height} = props;

    return (
        <img src={src} className={className} width={width} height={height} />
    )
}

export default Images;
