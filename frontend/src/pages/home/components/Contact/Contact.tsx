import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h1>Contactează-ne</h1>
        <p>Vrei o ofertă de preț pentru tâmplărie PVC sau rulouri? Scrie-ne mai jos.</p>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <label>
            Nume
            <input type="text" name="user_name" placeholder="Numele tău" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" placeholder="email@exemplu.com" required />
          </label>
          <label>
            Telefon
            <input type="tel" name="user_phone" placeholder="07xx xxx xxx" />
          </label>
          <label>
            Mesaj
            <textarea name="message" rows={4} placeholder="Doresc o ofertă pentru..." required />
          </label>
          
          <button type="submit" disabled={status === 'sending'} className="submit-btn">
            {status === 'sending' ? 'Se trimite...' : 'Trimite Mesajul'}
          </button>

          {status === 'success' && <p className="msg-success">Mesaj trimis cu succes! Te vom contacta curând.</p>}
          {status === 'error' && <p className="msg-error">A apărut o eroare. Te rugăm să ne suni.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact;