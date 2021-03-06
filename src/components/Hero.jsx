import React from 'react';
import ReactLogo from '../images/hero.svg'

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
            <p className='hero-heading'>Shorten URLs Anonymously</p>
            <p className='hero-sub-heading'>With our URL shortner, your URL are 100% anonymous and your information is completely safe with us.</p>
        </div>
        <div className='hero-right'>
          <img src={ReactLogo} alt="hero" />
        </div>
    </div>
  )
}
