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
import firebase from '../assets/_Path_3.svg'

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
                    <img src={react} />
                </div>

                <div className="square blue">
                    <img src={aws} />
                </div>

                <div className="square">
                    <img src={gcp} />
                </div>

                <div className="square">
                    <img src={redux} />
                </div>

                <div className="square">
                    <img src={js} />
                </div>

                <div className="square">
                    <img src={g10} />
                </div>

                <div className="square">
                    <img src={aws_blue} />
                </div>
                <br />
                <div className="square">
                    <img src={g10} />
                </div>

                <div className="square">
                    <img src={redux} />
                </div>

                <div className="square">
                    <img src={node} />
                </div>

                <div className="square">
                    <img src={firebase} />
                </div>

                <div className="square">
                    <img src={react} />
                </div>

                <div className="square">
                    <img src={js} />
                </div>
            </div>

        </div>
    )
}
