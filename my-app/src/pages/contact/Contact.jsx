import React from "react";
import { socials } from "../../data";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section container">
      <h2 className="section__title">
        Entre em <span>Contato</span>
       </h2>

      <div className="contact_socials">
        {socials.map(({ id, socialMedia, icon, link}) => (
          <a key={id} href={link} target="blank">
            <span>{icon}</span>
            {socialMedia}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
