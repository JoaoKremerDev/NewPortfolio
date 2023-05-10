import React from 'react'
import Profile from '../../assets/perfil.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"
import Themes from '../../components/Themes';

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile}alt='' className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">Eu sou o João Kremer! 
          <span>Desenvolvedor Web</span>
          </h1>
          <p className="home__description">
            Eu sou um Desenvolvedor Front-end com foco em criar uma experiência agradável para o usuário e apaixonado pela criação de softwares que possam ajudar aqueles que estão ao meu redor. 
          </p>

          <Link to='/sobre' className='button'>
            Mais sobre mim{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home;