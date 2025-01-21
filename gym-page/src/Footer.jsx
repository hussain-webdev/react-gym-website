import React from 'react'
import insta from './assets/ig.svg'
import face from './assets/facebook.svg'
import twit from './assets/x.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="sec1">
          <div className="map">
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#pricing'>Pricing</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className="location">
              <p>123 Wellness Way, Beverly Hills, CA 90210</p>
            </div>
          </div>
          <div className="logos">
            <div><img src={insta} alt="instagram" /></div>
            <div><img src={face} alt="facebook" /></div>
            <div><img src={twit} alt="twitter" /></div>
          </div>
        </div>
        <div className="verhr"></div>
        <div className="sec2">
          <ul>
            <li>Legal</li>
            <li>Saftey&PrivacyCenter</li>
            <li>PrivacyPolicy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
