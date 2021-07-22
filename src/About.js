import './css/About.css'

export default function about() {
    return (
        <div className='About'>
            <div className='About-container'>
                <div className='About-aboutme'>
                    <p> I am a Fullstack Web Developer currently living in Arlington Texas.I am passionate about web developement
                        and I love learning about new technologies. </p>
                </div>

                <div className='About-skills'>
                    <h2>Favorite Tools</h2>
                    <ul>
                        <li>Example 1, Inset Icon Here</li>
                        <li>Example 2, Inset Icon Here</li>
                        <li>Example 3, Inset Icon Here</li>
                        <li>Example 4, Inset Icon Here</li>
                    </ul>
                    <ul>
                        <li>Example 5, Inset Icon Here</li>
                        <li>Example 5, Inset Icon Here</li>
                        <li>Example 5, Inset Icon Here</li>
                        <li>Example 5, Inset Icon Here</li>
                    </ul>
                </div>
                <div className='About-education'>
                    <h2>Education</h2>
                    <ul>
                        <li>Example 1</li>
                        <li>Example 2</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}