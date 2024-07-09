import React from 'react'
import './styling.css';

const Contact = () => {
  return (
    <section>
        <div className="container"> 
            <h2 className="--text-center">Contact me</h2>

            <form className="--form-control --card --flex-center --dir-column">
                <input type="text" placeholder='Full name' name="user_name" required/>

                <input type="text" placeholder='Email' name="user_email" required/>

                <input type="text" placeholder='Subject' name="subject" required/>

                <textarea name="message" cols="30" rows="10"></textarea>

                <button type="submit" className="--btn --btn-primary">Send Message</button>



            </form>
        </div>

    </section>
  )
}

export default Contact