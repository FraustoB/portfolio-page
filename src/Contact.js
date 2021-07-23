import './css/Contact.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';
function Contact(props) {

    const [contInfo, setContInfo]=useState({
        fName: '',
        lName: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleFNameChange=(e) => setContInfo({ ...contInfo, fName: e.target.value })
    const handleLNameChange=(e) => setContInfo({ ...contInfo, lName: e.target.value })
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
        sendEmail(e);
        setContInfo({
            fName: '',
            lName: '',
            email: '',
            subject: '',
            message: ''
        })
    }


    return (
        <div className='Contact'>
            <div className='Contact-form-container'>
                <form className='Contact-form' onSubmit={handleSubmit}>
                    <span>
                        <label htmlFor='fNamee'>First Name</label>
                        <input onChange={handleFNameChange} value={contInfo.fName} name='fName' id='fName' />
                    </span>

                    <span>
                        <label htmlFor='lName'>Last Name</label>
                        <input onChange={handleLNameChange} value={contInfo.lName} name='lName' id='lName' />
                    </span>

                    <span>
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleEmailChange} value={contInfo.email} name='email' id='email' />
                    </span>
                    <span>
                        <label htmlFor='company'>Subject</label>
                        <input onChange={handleSubjectChange} value={contInfo.subject} name='subject' id='subject' />
                    </span>
                    <span>
                        <label htmlFor='message'>Message</label>
                        <input onChange={handleMessageChange} value={contInfo.message} name='message' id='message' />
                    </span>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>

        </div>

    )

}

export default Contact;