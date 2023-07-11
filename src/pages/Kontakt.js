import React from 'react'
import HeddingBodyLayout from '../components/HeddingBodyLayout'
import "./Kontakt.scss"
import { useForm, ValidationError } from '@formspree/react';

const Kontakt = () => {
  const [state, handleSubmit] = useForm("mzblbjea");
  if (state.succeeded) {
      return <p>Děkujeme za zprávu.</p>;
  }

  return <div className='contact-page'>
      <HeddingBodyLayout/>
      <h1>Zde nás můžete najít či kontaktovat</h1>
      <div className="contact-container">
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7086.818171322711!2d13.3390759575474!3d49.729863661503366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470aede42ef78651%3A0x1bfab9632b571d22!2sNC%20Borska%20pole!5e0!3m2!1sen!2sus!4v1689057623427!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="contact-form">
          <h3>Kontaktní formulář</h3>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='email'
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />

            <input
              placeholder='předmět'
              id="heading"
              name="heading"
            />
            <ValidationError 
              prefix="Heading" 
              field="heading"
              errors={state.errors}
            />

            <textarea
              placeholder='text zprávy'
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              Odeslat
            </button>
          </form>
        </div>
      </div>

    </div>
  
}

export default Kontakt
