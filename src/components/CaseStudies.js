import React from 'react'
import '../css/CaseStudies.css'
import image1 from '../assets/bus.png'
import image2 from '../assets/asdasd.png'
import image3 from '../assets/Layer 4dsasdas.png'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'
import Group35701 from '../assets/Group 35701.svg'

export default function CaseStudies() {
    return (
        <div className="caseStudies">
            <div className="bg-img-casestudies">
                <img src={Group35701} />
            </div>
            <div className="heading">
                Case Studies
            </div>

            <div className="subtext">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </div>

            <div className="row">
                <div className="caseCard lefti">
                    <img src={image1} />
                    <div className="sm-box">
                        <div className="iwp">Isomorphic Web App</div>
                        <div className="cntnt">
                            Getting involved matters. Crucial causes to the if ever, come from passive action.
                        </div>

                        <div className="read-more">
                            <div className="row">
                                <div>
                                    <img className="arr" src={arrow} />
                                    <img className="arr" src={arrow} />
                                </div>
                                <div className="rdmr">Read More</div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="caseCard midd">
                    <img src={image2} />
                    <div className="sm-box">
                        <div className="iwp">Isomorphic Web App</div>
                        <div className="cntnt">
                            Getting involved matters. Crucial causes to the if ever, come from passive action.
                        </div>

                        <div className="read-more">
                            <div className="row">
                                <div>
                                    <img className="arr" src={arrow} />
                                    <img className="arr" src={arrow} />
                                </div>
                                <div className="rdmr">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="caseCard righti">
                    <img src={image3} />
                    <div className="sm-box">
                        <div className="iwp">Isomorphic Web App</div>
                        <div className="cntnt">
                            Getting involved matters. Crucial causes to the if ever, come from passive action.
                        </div>

                        <div className="read-more">
                            <div className="row">
                                <div>
                                    <img className="arr" src={arrow} />
                                    <img className="arr" src={arrow} />
                                </div>
                                <div className="rdmr">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="rectanglea">
                View All
            </div>
        </div>
    )
}
