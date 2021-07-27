import "./css/Intro.css"
import { Link } from 'react-router-dom';
export default function Intro() {
    return (
        <div className='Intro'>
            <h1 className='Intro-title'>{`<`}Brandon Frausto{`>`}</h1>

            <div className='Intro-buttons'>
                <Link className='Intro-links' exact={'true'} to='/projects'>Projects</Link>
                <Link className='Intro-links' exact={'true'} to='/about'>About</Link>
                <Link className='Intro-links' exact={'true'} to='/contact'>Contact</Link>
            </div>
        </div>
    )
}