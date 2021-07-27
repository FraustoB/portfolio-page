import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

    const [isToggled, setIsToggle]=useState(false)

    const handleIsToggled=() => {
        setIsToggle(!isToggled)
    }

    return (
        <>
            <nav>
                <div className='Navbar'>
                    <Link to='/' style={{ textDecoration: 'none' }}><div className='frausto-brand'> {`<`}frausto.dev{`>`}</div></Link>

                    <button className='toggle-button' onClick={handleIsToggled}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </button>
                    <div onClick={handleIsToggled} className={isToggled? 'Navbar-navlinks active':'Navbar-navlinks'}>
                        <ul>
                            <li><NavLink activeClassName='Navbar-navlink-active ' className='Navbar-navlinks-link' to='/projects'>Projects</NavLink></li>
                            <li><NavLink activeClassName='Navbar-navlink-active' className='Navbar-navlinks-link' to='/about'>About</NavLink></li>
                            <li><NavLink activeClassName='Navbar-navlink-active' className='Navbar-navlinks-link' to='/contact'>Contact</NavLink></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}