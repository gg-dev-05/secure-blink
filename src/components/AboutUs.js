import React from 'react'
import '../css/AboutUs.css'
import arrow from '../assets/Group 35624.svg'
import arrow1 from '../assets/arrow-down-sign-to-navigate.svg'

export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="row">
                <img src={arrow} />
                <div className="subHeading">ABOUT US</div>
            </div>
            <div className="mainHeading">Great Digital Agency</div>
            <div className="content1">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</div>
            <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</div>
            <div id="rectanglee">
                <div className="contentt">Get Started</div>
                <img className="arrow" src={arrow1} />
                <img className="arrow" src={arrow1} />
            </div>
        </div>
    )
}
