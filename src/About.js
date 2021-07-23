import './css/About.css'

export default function about() {
    return (
        <div className='About'>
            <div className='About-container'>
                <div className='About-aboutme'>
                    <p> Fullstack Web Developer currently living in Arlington Texas, Passionate about software developement
                        and I love learning about new technologies. </p>
                </div>
                <div className='About-links'>
                    <p>Linked In</p>
                    <p>github</p>
                </div>

                <div className='About-resume'>
                    <h2>Resume</h2>
                    <ul>
                        <li>Example 1</li>
                        <li>Example 2</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}