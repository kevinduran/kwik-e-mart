import React from 'react'
import {FaTwitter, FaInstagram, FaEnvelope} from 'react-icons/fa'



import './Footer.css'
import FooterImage from '../assets/footer_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer--top'>
            <div className='footer--top--one'>
                <div className='footer--top--word__container'>
                    <h5 className='footer--top--word__container--top'>* we only accept bitcoin</h5>
                    <h2 className='footer--top--word__container--bottom'>Thank you, come again.</h2>
                </div>
                <div className='footer--top--input__container'>
                    <input className='footer--top--input' placeholder='I will ignore your email.'></input>
                    <button className='footer__email--button'><span className='footer__email--button--icon'><FontAwesomeIcon icon={faEnvelope} /></span></button>
                </div>
            </div>
            <div className='footer--top--two'>
                <div className='footer--top--image__container'>
                    <div className='glowEffect'></div>
                    <img className='footer--top--image' src={FooterImage} />
                </div>
            </div>
        </div>
        <div className='footer--bottom'>
            <div className='footer--bottom--one'>
                <div className='footer--bottom--one--left'>
                    <h2 className='footer--logo--name'>kwik<span className='greenLine'>-</span>e<span className='greenLine'>-</span>mart</h2>
                </div>
                <div >
                    <ul>
                        <li className='footer--bottom--li green'>About</li>
                        <li className='footer--bottom--li green'>Jobs</li>
                        <li className='footer--bottom--li green'>Docs</li>
                    </ul>

                </div>
            </div>
            <div className='footer--bottom--two'>
                <div>
                    <ul className='footer--bottom--li--ul'>
                        <li className='footer--bottom--li green'>Terms and Conditions</li>
                        <li className='footer--bottom--li green'>Privacy Policy</li>
                        <li className='footer--bottom--li green'>Cookie Policy</li>
                    </ul>

                </div>
                <div>
                    <h4 className='footer--bottom--li'>Let's Chat</h4>
                    <p className='footer--bottom--li'>kwikemart@gmail.com</p>
                    <div className='footer--bottom--li'>
                        <span className='footer--social--link'><FaTwitter/></span>
                        <span className='footer--social--link'><FaInstagram/></span>
                        <span className='footer--social--link'><FaEnvelope/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer