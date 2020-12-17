import React from 'react'
import '../css/BackgroundRocket.css'
import backgroundRocket from '../assets/Union 1.svg'
import circle from '../assets/Ellipse 223.svg'
export default function BackgroundRocket() {
    return (
        <div className="backgroundRocket">
            <img className="bgRocket" src={backgroundRocket} />
            <img className="circle" src={circle} />

        </div>
    )
}
