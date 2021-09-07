import React from 'react'
import './footer.css'
import logo from '../../assets/Logo.svg'
import { ReactComponent as FacebookLogo } from '../../assets/facebook-logo.svg'
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin-logo.svg'
import { ReactComponent as InstagramLogo } from '../../assets/instagram-logo.svg'
import { ReactComponent as PinSymb } from '../../assets/pin-logo.svg'
import { ReactComponent as CallSymb } from '../../assets/call-logo.svg'
import { ReactComponent as MailSymb } from '../../assets/mail-logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__upper'>
        <div className='footer__upper__text'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='footer__logo' />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <div className='footer__upper__text__social'>
            <h3>Social Links</h3>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FacebookLogo />
            </a>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedinLogo />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
            >
              <InstagramLogo />
            </a>
          </div>
        </div>
        <div className='footer__upper__links'>
          <div className='footer__upper__quick-nav'>
            <h3>Quick Nav</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/features'>Features</Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='footer__upper__reach-us'>
            <h3>Reach Us</h3>
            <ul>
              <li>
                <div className='footer__upper__reach-us__single'>
                  <PinSymb className='footer__upper__reach-us__svg pin-symb' />{' '}
                  <a
                    href='http://maps.google.com/maps?q=16-B+Lavkush+Society,+Behind+Medlink+Hospital+Satellite,+Ahmedabad+380015'
                    target='_blank'
                    rel='noreferrer'
                    className='footer__upper__reach-us__links'
                  >
                    16-B, Lavkush Society, Behind Medlink Hospital Satellite,
                    Ahmedabad-380015
                  </a>
                </div>
              </li>
              <li>
                <div className='footer__upper__reach-us__single'>
                  <CallSymb className='footer__upper__reach-us__svg' />
                  <a
                    href='tel:+917887636763'
                    className='footer__upper__reach-us__links'
                  >
                    +91 78 87 63 67 63
                  </a>
                </div>
              </li>
              <li>
                <div className='footer__upper__reach-us__single'>
                  <MailSymb className='footer__upper__reach-us__svg' />
                  <a
                    href='mailto:booxwoox@gmail.com'
                    className='footer__upper__reach-us__links'
                  >
                    booxwoox@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__lower'>
        <p>
          &#169; Copyright BooxWoox. All Rights Reserved. Proudly made by
          BooxWoox
        </p>
      </div>
    </div>
  )
}
