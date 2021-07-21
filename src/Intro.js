import "./css/Intro.css"
import { Link } from 'react-router-dom';
export default function Intro() {

    return (
        <div className='Intro'>
            <span>Welcome to Frausto.Dev</span>
            <h1 className='Intro-title'>{`<`}Brandon Frausto{`>`}</h1>


            <div className='Intro-buttons'>
                <Link className='Intro-links' exact to='/portfolio'>Portfolio</Link>
                <Link className='Intro-links' exact to='/about'>About</Link>
                <Link className='Intro-links' exact to='/contact'>Contact</Link>
                <Link className='Intro-links' exact to='/resume'>Resume</Link>
            </div>
        </div>
    )
}