import React from 'react'
import '../css/SendUsMessage.css'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'

export default function SendUsMessage() {
    return (
        <div className="sendUsMessage">

            <div className="heading">
                Send Us message
            </div>

            <div className="txt">
                Your Email*
            </div>
            <hr />

            <div className="txt mgt">
                Your Name*
            </div>
            <hr />

            <div className="txt mgt">
                Phone Number*
            </div>
            <hr />

            <div className="txt mgt">
                Subject
            </div>
            <hr />

            <div className="txt-bx">
                Your Message
            </div>
            <div className="mgt">&nbsp;</div>
            <hr />

            <div className="agree">
                <div className="sq"></div>
                <div className="agr">
                    By sending this message, you confirm that you have read and agreed to our privacy-policy.
                </div>
            </div>

            <div id="rectangleq">
                <div className="content">Get Started</div>
                <img className="arrow" src={arrow} alt="arrow" />
                <img className="arrow" src={arrow} alt="arrow" />
            </div>

        </div>
    )
}
