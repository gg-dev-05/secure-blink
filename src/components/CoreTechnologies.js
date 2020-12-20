import React from 'react'
import '../css/CoreTechnologies.css'
import react from '../assets/React-icon.svg'
import aws from '../assets/Amazon_Web_Services_Logo.svg'
import gcp from '../assets/Mask Group 1.svg'
import redux from '../assets/redux-logo.svg'
import js from '../assets/Path 37520.svg'
import g10 from '../assets/g10.svg'
import aws_blue from '../assets/Amazon_Web_Services_Logo-1.svg'
import node from '../assets/Mask Group 3.svg'
import firebase from '../assets/firebase.svg'

export default function CoreTechnologies() {
    return (
        <div className="coreTechnologies">
            <div className="heading">Core Technologies</div>
            <div className="subheading">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</div>
            <div className="rectangley">
                <div className="left">Design</div>
                <div className="lr-brdr">
                    <div className="middle">Development</div>

                </div>
                <div className="right">Marketing</div>
            </div>

            <div className="icons">
                <div className="square">
                    <img src={react} alt="logo" />
                </div>

                <div className="square blue">
                    <img src={aws} alt="logo" />
                </div>

                <div className="square">
                    <img src={gcp} alt="logo" />
                </div>

                <div className="square">
                    <img src={redux} alt="logo" />
                </div>

                <div className="square">
                    <img src={js} alt="logo" />
                </div>

                <div className="square">
                    <img src={g10} alt="logo" />
                </div>

                <div className="square">
                    <img src={aws_blue} alt="logo" />
                </div>
                <br />
                <div className="square">
                    <img src={g10} alt="logo" />
                </div>

                <div className="square">
                    <img src={redux} alt="logo" />
                </div>

                <div className="square">
                    <img src={node} alt="logo" />
                </div>

                <div className="square">
                    <img src={firebase} alt="logo" />
                </div>

                <div className="square">
                    <img src={react} alt="logo" />
                </div>

                <div className="square">
                    <img src={js} alt="logo" />
                </div>
            </div>

        </div>
    )
}
