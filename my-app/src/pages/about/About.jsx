import React from "react";
import Info from "../../components/info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/FrontendDevKremer.pdf";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          Sobre <span>Mim</span>
        </h2>


      <div className="about__container grid">
        <div className="about__info">
          <h3 className="section__subtitle">Informações Pessoais</h3>

          <ul className="info__list grid">
            <Info />
          </ul>

          <a href={CV} download="" className="button">
            Baixar Currículo
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>

        </div>
        
        <div className="stats grid">
            <Stats />
          </div>
      </div>
      </section>

      <div className="separator"></div>
    </main>
  );
};

export default About;
