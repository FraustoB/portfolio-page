import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import { useState } from 'react';

export default function NavBar(props) {

    const [isToggled, changeToggle]=useState(false)

    const handleIsToggled=() => {
        changeToggle(!isToggled)
    }

    return (
        <>
            <nav>
                <div className='Navbar'>
                    <div className='frausto-brand'> {`<`}frausto.dev{`>`}</div>
                    <button className='toggle-button' onClick={handleIsToggled}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </button>
                    <div className={isToggled? 'Navbar-navlinks active':'Navbar-navlinks'}>
                        <ul>
                            <li><NavLink activeClassName='Navbar-navlink-active ' className='Navbar-navlinks-link' to='/portfolio'>Portfolio Page</NavLink></li>
                            <li><NavLink activeClassName='Navbar-navlink-active' className='Navbar-navlinks-link' to='/about'>About</NavLink></li>
                            <li><NavLink activeClassName='Navbar-navlink-active' className='Navbar-navlinks-link' to='/contact'>Contact</NavLink></li>
                            <li><NavLink activeClassName='Navbar-navlink-active' className='Navbar-navlinks-link' to='/resume'>Resume</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}
        </>
    )
}