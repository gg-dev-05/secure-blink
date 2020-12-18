import React from 'react'
import '../css/Designing.css'
import Group35621 from '../assets/Group 35621.svg'
import tick from '../assets/Group 35604.svg'
export default function Designing() {
    return (
        <div className="designing">
            <div className="heading">
                <img className="Group35621" src={Group35621} />
                <h1>UI/UX Designing</h1>
            </div>

            <div className="subheading">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </div>

            <div className="list">
                <div className="item"><img src={tick} />
                    <div className="item-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</div>
                </div>

                <div className="item"><img src={tick} />
                    <div className="item-text">Lorem ipsum dolor sit amet,</div>
                </div>

                <div className="item"><img src={tick} />
                    <div className="item-text">conse ctetur adipi scing elit.</div>
                </div>

                <div className="item"><img src={tick} />
                    <div className="item-text">Lorem ipsum dolor sit amet, conse ctetur</div>
                </div>
            </div>
        </div>
    )
}
