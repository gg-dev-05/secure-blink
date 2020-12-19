import React from 'react'
import '../css/Customers.css'
import arrow from '../assets/Group 35624.svg'
import react from '../assets/React-icon.svg'
import image from '../assets/Ellipse 216.png'
import arrows from '../assets/Group 35601.svg'
import Group35648 from '../assets/Group 35648.svg'
import Group35649 from '../assets/Group 35649.svg'

export default function Customers() {
    return (
        <div className="customers">
            <div className="white-dots-cust">
                <img src={Group35648} alt="dots" />
            </div>
            <div className="blue-dots-cust">
                <img src={Group35649} alt="dots" />
            </div>
            <div className="image">
                <div className="white-circle">
                    <img src={image} alt="circle" />
                </div>
            </div>
            <div className="text">
                <div className="roww">
                    <img src={arrow} alt="arrow" />
                    <div className="subHeading">SELECTED CUSTOMERS</div>
                </div>

                <div className="heading">
                    Check what our client say about us
                </div>

                <div className="more-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
                </div>
                <img className="react-icon" src={react} alt="logo" />
                <div className="arrows">
                    <img src={arrows} alt="arrow" />
                </div>
            </div>
        </div>
    )
}
