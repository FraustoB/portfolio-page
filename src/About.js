import './css/About.css'
import NavBar from './Navbar'


export default function about() {
    return (
        <>
            <NavBar />
            <div className='About'>
                <div className='About-container'>
                    <div className='About-aboutme'>
                        <p> Fullstack Web Developer currently living in Arlington Texas. Passionate about software developement
                            in love with learning new technologies, and creative Reactive Web applications. Willing to work for any timezone and any location </p>
                    </div>

                    <div className='About-links'>
                        <a rel="noreferrer noopener" target="_blank" href='https://github.com/FraustoB'><img alt='github' src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" /></a>
                        <a rel="noreferrer noopener" target="_blank" href='https://www.linkedin.com/in/brandon-frausto-13a712213/'><img alt='linkedin' src="https://img.icons8.com/ios-glyphs/50/000000/github.png" /></a>
                    </div>

                    <div className='About-resume'>
                        <a rel="noreferrer noopener" target="_blank" href='https://rxresu.me/r/ksluh6'><h2>Resume</h2></a>
                    </div>
                </div>
            </div>
        </>
    )
}