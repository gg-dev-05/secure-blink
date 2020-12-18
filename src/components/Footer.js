import React from 'react'
import '../css/Footer.css'
import fb from '../assets/Group 34322.svg'
import twitter from '../assets/Group 34323.svg'
import insta from '../assets/instagram.svg'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="info">
                Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
                <div className="info-icons">
                    <img src={fb} />
                    <img src={twitter} />
                    <img src={insta} />

                </div>
            </div>

            <div className="services">
                <div className="headItem">
                    Our Services
                </div>
                <div className="blue-line"></div>
                <div className="listi-item">Web Development</div>
                <div className="listi-item">Mobile Development</div>
                <div className="listi-item">Cloud Technologies</div>
                <div className="listi-item">UI/UX Desins</div>

            </div>

            <div className="links">
                <div className="headItem">
                    Our Links
                </div>
                <div className="blue-line"></div>
                <div className="listi-item">Terms & Condition</div>
                <div className="listi-item">Privacy Policy</div>
                <div className="listi-item">Imprint</div>
                <div className="listi-item">Legal</div>

            </div>

            <div className="contact">
                <div className="headItem">
                    Contact Us
                </div>
                <div className="blue-line"></div>
                <div className="listi-item">Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</div>
                <div className="listi-item">00 1800 245 453</div>
                <div className="listi-item">hello@inkyy.com</div>

            </div>
        </div>
    )
}
