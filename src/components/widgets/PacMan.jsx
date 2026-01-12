import "./PacMan.scss"
import React, {useEffect, useState} from 'react'

function PacMan({ className = "", color = "saraswati-color-variant-loader", hidden = false }) {
    const hiddenClass = hidden ?
        `saraswati-wrapper-hidden` : ``

    return (
        <div className={`saraswati-wrapper ${className} ${hiddenClass}`}>
            <div className={`saraswati ${color}`}>
                <div className={`saraswati-content`}>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PacMan.ColorVariants = {
    LOADER: "saraswati-color-variant-loader"
}

export default PacMan