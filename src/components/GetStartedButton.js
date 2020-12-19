import React from 'react'
import '../css/GetStartedButton.css'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'


export default function GetStartedButton() {
    return (
        <div>
            <div id="rectangle">
                <div className="content">Get Started</div>
                <img className="arrow" src={arrow} alt="arrow" />
                <img className="arrow" src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
