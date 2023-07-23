import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='site-title'>Email Scheduler</Link>
                <ul>
                    <li><Link to="/login" style={{ padding: 5, fontFamily:'cursive' }}>Login</Link></li>
                    <li><Link to="/signup" style={{ padding: 5, fontFamily:'cursive' }}>Sign Up</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;