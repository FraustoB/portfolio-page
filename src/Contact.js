import './css/Contact.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';
function Contact(props) {

    const [contInfo, setContInfo]=useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleFNameChange=(e) => setContInfo({ ...contInfo, name: e.target.value })
    const handleEmailChange=(e) => setContInfo({ ...contInfo, email: e.target.value })
    const handleSubjectChange=(e) => setContInfo({ ...contInfo, subject: e.target.value })
    const handleMessageChange=(e) => setContInfo({ ...contInfo, message: e.target.value })

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_jaqy12b', 'template_jdnim5a', e.target, 'user_WL8FlxANz3H5VBWNI7AB9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        // sendEmail(e);
        setContInfo({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }


    return (
        <div className='Contact'>
            <div className='Contact-form-container'>
                <span>
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/email-marketing--v2.png" />
                    <h2> Lets get in touch</h2>
                </span>

                <form className='Contact-form' onSubmit={handleSubmit}>

                    <input onChange={handleFNameChange} value={contInfo.name} name='name' id='name' placeholder='Name' />
                    <input onChange={handleEmailChange} value={contInfo.email} name='email' id='email' placeholder='Email' />
                    <input onChange={handleSubjectChange} value={contInfo.subject} name='subject' id='subject' placeholder='Subject' />
                    <textarea onChange={handleMessageChange} value={contInfo.message} name='message' id='message' placeholder='Message'
                        className='Contact-message' />

                    <button className='btn btn-secondary'>Send Off</button>
                </form>
            </div>

        </div>

    )

}

export default Contact;