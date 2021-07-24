import './css/About.css'


export default function about() {
    return (
        <div className='About'>
            <div className='About-container'>
                <div className='About-aboutme'>
                    <p> Fullstack Web Developer currently living in Arlington Texas. Passionate about software developement
                        and love learning about new technologies. </p>
                </div>

                <div className='About-links'>
                    <a rel="noreferrer noopener" target="_blank" href='https://github.com/FraustoB'><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" /></a>
                    <a rel="noreferrer noopener" target="_blank" href='https://www.linkedin.com/in/brandon-frausto-13a712213/'><img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" /></a>
                </div>

                <div className='About-resume'>
                    <a href=''><h2>Resume</h2></a>
                </div>
            </div>
        </div>
    )
}