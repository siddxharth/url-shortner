import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
        <div className='nav-left'>
            <Link className='nav-icon' to='/'>Shortly</Link>
            <ul className='Links'>
                <li><Link className='nav-Link' to="/">Features</Link></li>
                <li><Link className='nav-Link' to="/">Pricing</Link></li>
                <li><Link className='nav-Link' to="/">Resources</Link></li>
            </ul>
        </div>
        <div className='nav-right'>
            <ul className='login-signup'>
                <li><Link className='nav-Link' to="/">Login</Link></li>
                <li><Link className='nav-Link' to="/">SignUp</Link></li>
            </ul>
        </div>
    </nav>
  )
}
