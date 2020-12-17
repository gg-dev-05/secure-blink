import React from 'react'
import '../css/AboutUs.css'
import GetStartedButton from "./GetStartedButton";
import arrow from '../assets/Group 35624.svg'

export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="row">
                <img src={arrow} />
                <div className="subHeading">ABOUT US</div>
            </div>

            <div className="mainHeading">Great Digital Agency</div>
            <div className="content1">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</div>
            <div className="content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</div>
            <GetStartedButton />
        </div>
    )
}
