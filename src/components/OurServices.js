import React from 'react'
import '../css/OurServices.css'
import arrow from '../assets/Group 35624.svg'

export default function OurServices() {
    return (
        <div className="ourServices">
            <div className="row">
                <img src={arrow} />
                <div className="subHeading">OUR SERVICES</div>
            </div>

            <div className="mainHeading">Transforming your ideas into Reality</div>
            <div className="box">
                <div className="rectangle">Web Development</div>
                <div className="rectangle ml36">Mobile Development</div>
                <div className="rectangle selected">UI/UX Designing</div>
                <div className="rectangle ml23">Branding</div>
                <div className="rectangle">Cloud Technology</div>
            </div>
        </div>
    )
}
