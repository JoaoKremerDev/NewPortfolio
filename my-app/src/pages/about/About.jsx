import React from "react";
import CV from "../../assets/FrontendDevKremer.pdf";
import "./about.css";

import Info from "../../components/info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import ResumeItem from "../../components/ResumeItem";

import { resume } from '../../data'
import { FaDownload } from "react-icons/fa";

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

      <section className="skils">
        <h3 className="section__subtitle subtitle__center">Minhas Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>

        <div className="separator"></div>

        <div className="section resume">
        <h3 className="section__subtitle subtitle__center">Formação & Experiência</h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education')
              return <ResumeItem key={val.id} {...val}/>
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience')
              return <ResumeItem key={val.id} {...val}/>
            })}
          </div>

        </div>
        </div>
      </section>
    </main>
  );
};

export default About;
