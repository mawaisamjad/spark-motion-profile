
import React, { useRef } from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        <p className="section-subtitle animate-on-scroll">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
