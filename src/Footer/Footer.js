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
                    <div className='footer--top--word__container--small'>
                        <h5 className='footer--top--word__container--top'>* we only accept bitcoin</h5>
                    </div>
                    <div className='footer--top--word__container--small'>
                        <h2 className='footer--top--word__container--bottom'>Thank you, come again.</h2>
                    </div>         
                </div>
                <div className='footer--top--input__container'>
                    <input className='footer--top--input' placeholder='I will ignore your email.'></input>
                    <button className='footer__email--button'><span className='footer__email--button--icon'><FontAwesomeIcon icon={faEnvelope} /></span></button>
                </div>
            </div>
            <div className='footer--top--two'>
                <div className='footer--top--image__container'>
                    <div className='glowEffect'></div>
                    <img className='footer--top--image' src={FooterImage}  alt='liquor store night'/>
                </div>
            </div>
        </div>
        <div className='footer--bottom'>
            <div className='footer--bottom--one'>
                <div className='footer--bottom--one--logo footer--bottom--one--item'>
                    <h2 className='footer--logo--name'>kwik<span className='greenLine'>-</span>e<span className='greenLine'>-</span>mart</h2>
                </div>
                <div className='footer--bottom--one--item' >
                        <p className='footer--bottom--list'>About</p>
                        <p className='footer--bottom--list'>Jobs</p>
                        <p className='footer--bottom--list'>Docs</p>
                </div>
            </div>
            <div className='footer--bottom--two'>
                <div className='footer--bottom--two--item'>
                        <p className='footer--bottom--list green'>Terms and Conditions</p>
                        <p className='footer--bottom--list green'>Privacy Policy</p>
                        <p className='footer--bottom--list green'>Cookie Policy</p>
                </div>
                <div className='footer--bottom--two--item'>
                    <h4 className='footer--bottom--list'>Let's Chat</h4>
                    <p className='footer--bottom--list'>kwikemart@gmail.com</p>
                    <div className='footer--bottom--list'>
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