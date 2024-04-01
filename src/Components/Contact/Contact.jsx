import React, { useRef } from 'react'
import "./Contact.css"
import msgicon from "../../assets/msg-icon.png"
import mailicon from "../../assets/mail-icon.png"
import phoneicon from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import whitearrow from "../../assets/white-arrow.png"
import emailjs from "@emailjs/browser"


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lcc1g7y', 'template_g7kg5ab', form.current, {
        publicKey: '0TGK4fXrS5DoUOthF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <>
            <div className="contact" id='contact'>
                <div className="left-contact">
                    <h3 className='heading-contact'>Send us a message <img src={msgicon} alt="" height="35rem" /></h3>
                    <p className='info-content'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <span className='gmail'><img src={mailicon} alt="" height="25rem" /> Contact@xyzgmail.com</span>
                    <span className='phone'><img src={phoneicon} alt="" height="25rem" />+123-456-789</span>
                    <span className='address'><img src={location} alt="" height="25rem" />77 Massachusetts Ave, Cambridge <br />
                        MA 02139, United States</span>
                </div>
                <div className="right-contact">
                    <form action="" className="contact-form" ref={form} onSubmit={sendEmail} >
                        <label htmlFor="user_name">Your name</label>
                        <input type="text" className='name' placeholder='Enter your name' name='user_name'  required="required" />
                        <label htmlFor="your_phn-number">Phone Number</label>
                        <input type="text" className='name' placeholder='Enter your mobile number' name='your_phn-number'  required="required"/>
                        <label htmlFor="your_email">Your Email</label>
                        <input type="email" className='email' placeholder='Enter your email id' name='your_email'  required="required"/>
                        <label htmlFor="message">Write your messages here</label>
                        <textarea name="message" className='msg' rows="8" placeholder='Enter your message' required="required" ></textarea>
                        <button type='submit' value="send" className='submitbtn'>Submit now <img src={whitearrow} alt="" height="15rem"/> </button>
                    </form >
                </div>
            </div>
        </>
    )
}

export default Contact
