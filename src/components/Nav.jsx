import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
        <div className='nav-left'>
            <Link className='nav-icon' to='/'>Shortly</Link>
            <ul className='Links'>
                <li><Link className='nav-Link' to="/" onClick={() => alert('This is a dummy link!')}>Features</Link></li>
                <li><Link className='nav-Link' to="/" onClick={() => alert('This is a dummy link!')}>Pricing</Link></li>
                <li><Link className='nav-Link' to="/" onClick={() => alert('This is a dummy link!')}>Resources</Link></li>
            </ul>
        </div>
        <div className='nav-right'>
            <ul className='login-signup'>
                <li><Link className='nav-Link' to="/" onClick={() => alert('This is a dummy link!')}>Login</Link></li>
                <li><Link className='nav-Link-signup' to="/" onClick={() => alert('This is a dummy link!')}>SignUp</Link></li>
            </ul>
        </div>
    </nav>
  )
}
