import React from 'react'
import '../css/BackgroundRocket.css'
import backgroundRocket from '../assets/Union 1.svg'
import circle from '../assets/Ellipse 223.svg'
import tri1 from '../assets/Path 37486.svg'
import tri2 from '../assets/Path 37500.svg'
import tri3 from '../assets/Path 37485.svg'
import tri4 from '../assets/Path 37502.svg'

export default function BackgroundRocket() {
    return (
        <div className="backgroundRocket">
            <img className="bgRocket" src={backgroundRocket} />
            <img className="circle" src={circle} />
            <div className="tri1">
                <img src={tri1} />
            </div>
            <div className="tri2">
                <img src={tri2} />
            </div>

            <div className="tri3">
                <img src={tri3} />
            </div>

            <div className="tri4">
                <img src={tri4} />
            </div>
        </div>
    )
}
