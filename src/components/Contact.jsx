import React from 'react';

export const Contact = () => {
    return (
        <section id="contact" className='contact__section'>
            <div className='contact__container'>
                <h5>Get in touch</h5>
                <h1>Contact me</h1>
                <div className='contact__content'>
                    <div className='contact__email'>
                        <h5>Send me a Email</h5>
                        <i className="fa-solid fa-envelope"></i>
                        <h6>Email</h6>
                        <p>ivan.panussis.c@gmail.com</p>
                        <div className='contact__email-button'>
                            <a href="mailto:ivan.panussis.c@gmail.com">Click here!</a>
                        </div>
                    </div>
                    <div className='contact__form'>
                        <form>
                            <input type='text' name='name' placeholder='Your Full Name' required />
                            <input type='email' name='email' placeholder='Your Email' required />
                            <textarea type='text' name='message' rows={7}  placeholder='Your Message' required />
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
