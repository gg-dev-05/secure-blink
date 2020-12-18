import React from 'react'
import '../css/CaseStudies.css'
import image1 from '../assets/bus.png'
import image2 from '../assets/asdasd.png'
import image3 from '../assets/Layer 4dsasdas.png'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'


export default function CaseStudies() {
    return (
        <div className="caseStudies">
            <div className="heading">
                Case Studies
            </div>

            <div className="subtext">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </div>

            <div className="row">
                <div className="caseCard lefti">
                    <img src={image1} />
                    <div className="iwp">
                        Isomorphic Web App
                    </div>
                    <div className="cntnt">
                        Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div className="read-more">
                        <div className="row">
                            Read More
                        </div>
                    </div>
                </div>

                <div className="caseCard">
                    <img src={image2} />
                    <div className="iwp">
                        Isomorphic Web App
                    </div>
                    <div className="cntnt">
                        Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div className="read-more">
                        <div className="row">

                        </div>
                    </div>
                </div>

                <div className="caseCard righti">
                    <img src={image3} />
                    <div className="iwp">
                        Isomorphic Web App
                    </div>
                    <div className="cntnt">
                        Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div className="read-more">
                        <div className="row">

                        </div>
                    </div>
                </div>



            </div>

            <div className="rectangle">
                View All
            </div>
        </div>
    )
}
