import React from 'react'
import './Footer.css'
import Apu from '../assets/footer_image.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className='footer'>
        <div>
            <div>
                <div>
                    <h5>we only accept bitcoin</h5>
                    <h2>Thank you, come again.</h2>
                </div>
                <div>
                    <input placeholder='I will ignore your email.'></input><button className='footer__email--button'><span className='footer__email--button--icon'><FontAwesomeIcon icon={faEnvelope} /></span></button>
                </div>
            </div>
            <div>
                <img src={Apu} />
            </div>
        </div>
        <div>
            <div>
                <div>
                    <h2>kwik-e-mart</h2>
                    <p>I'm so glad you came. If I don't increase profits, I'll have to sell Sanjay to the Krusty Burger!</p>
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Docs</li>
                    </ul>

                </div>
            </div>
            <div>
                <div>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>

                </div>
                <div>
                    <h4>Let's Chat</h4>
                    <p>kwikemart@gmail.com</p>
                    <div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer