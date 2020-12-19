import React from 'react'
import '../css/Card.css'
import line from '../assets/Rectangle 1326.svg'
export default function Card(props) {

    if (props.color == 'blu') {
        return (
            <div className="card-box">
                <div className="rectanglew">{props.step}</div>
                <div className="heading">
                    {props.heading}
                </div>
                <img src={line} />
                <div className="subtext">
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                </div>

                <div className="subtext">
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu
                </div>
            </div>
        )
    }
    return (
        <div className="card-box">
            <div className="rectangle">{props.step}</div>
            <div className="heading">
                {props.heading}
            </div>
            <img src={line} />
            <div className="subtext">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </div>

            <div className="subtext">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu
            </div>
        </div>
    )
}
