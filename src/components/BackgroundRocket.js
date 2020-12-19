import React from 'react'
import '../css/BackgroundRocket.css'
import backgroundRocket from '../assets/Union 1.svg'
import circle from '../assets/Ellipse 223.svg'
import tri1 from '../assets/Path 37486.svg'
import tri2 from '../assets/Path 37500.svg'
import tri3 from '../assets/Path 37485.svg'
import tri4 from '../assets/Path 37502.svg'
import tri5 from '../assets/Path 37501.svg'
import tri6 from '../assets/Path 37488.svg'
import tri7 from '../assets/Group 35698.svg'



export default function BackgroundRocket() {
    return (
        <div className="backgroundRocket">
            <img className="bgRocket" src={backgroundRocket} alt="bgr" />
            <img className="circle" src={circle} alt="bgr" />
            <div className="tri1">
                <img src={tri1} alt="tri" />
            </div>
            <div className="tri2">
                <img src={tri2} alt="tri" />
            </div>

            <div className="tri3">
                <img src={tri3} alt="tri" />
            </div>

            <div className="tri4">
                <img src={tri4} alt="tri" />
            </div>

            <div className="tri5">
                <img src={tri5} alt="tri" />
            </div>

            <div className="tri6">
                <img src={tri6} alt="tri" />
            </div>

            <div className="tri7">
                <img src={tri7} alt="tri" />
            </div>
        </div>
    )
}
