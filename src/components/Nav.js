import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {                
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='site-title'>Email Scheduler</Link>
            </nav>
        </>
    )
}

export default Nav;