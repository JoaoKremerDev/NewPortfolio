import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Theme1 from './assets/purple.png';
// import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
// import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Início',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre',
    icon: <FaUser className='nav__icon' />,
    path: '/sobre',
  },

  {
    id: 3,
    name: 'Projetos',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projetos',
  },

  {
    id: 4,
    name: 'Contato',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contato',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nome : ',
    description: 'João Vitor Melo Kremer',
  },

  {
    id: 3,
    title: 'Idade : ',
    description: '24 anos',
  },

  {
    id: 4,
    title: 'Nacionalidade : ',
    description: 'Brasileiro',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponível',
  },

  {
    id: 6,
    title: 'Endereço : ',
    description: 'Guarapari - ES',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'joaokremer.developer@gmail.com',
  },

  {
    id: 10,
    title: 'Idiomas : ',
    description: 'Português, Inglês, Japonês e Italiano',
  },
];

export const stats = [
  {
    id: 1,
    no: '7+',
    title: 'Meses de <br /> Estudo',
  },

  {
    id: 2,
    no: '22+',
    title: 'Projetos <br /> Finalizados',
  },

  {
    id: 3,
    no: '1º',
    title: 'Semestre em<br /> Engenharia de Software',
  },

  {
    id: 4,
    no: '10',
    title: 'Certificados de curso <br />na Área',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Desenvolvedor Front-end Jr - SouJunior',
    desc: 'Como desenvolvedor React no projeto "Vagas", sou responsável por desenvolver e manter os componentes React da aplicação, além de utilizar TypeScript para garantir a tipagem dos dados e melhorar a escalabilidade e manutenção do código. Trabalho com as bibliotecas do React para gerenciamento de estado, roteamento e consultas à API, e utilizo Styled Components para estilizar os componentes da aplicação, seguindo as diretrizes de design definidas para a plataforma. Além disso, testo e faço a depuração da aplicação para garantir o bom funcionamento e a qualidade do código. Sempre alinhado com os requisitos do projeto e com as necessidades dos usuários, buscando propor soluções criativas e eficientes para atingir esses objetivos. É uma experiência enriquecedora, que me permite aprimorar minhas habilidades em desenvolvimento React e em trabalhar em equipe, além de contribuir para o desenvolvimento de uma plataforma que conecta candidatos e empresas de forma eficiente e inovadora.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - 2027',
    title: 'Bacharelado em Engenharia De Software - Estácio',
    desc: 'Engenharia de software é o processo de desenvolver, manter e gerenciar sistemas de software, envolvendo planejamento, análise, design, implementação, teste e manutenção. É uma área interdisciplinar que utiliza princípios da engenharia para garantir que os sistemas de software sejam desenvolvidos de maneira eficiente, eficaz e de acordo com as necessidades dos usuários.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '10/2022 - 10/2022',
    title: 'JavaScript Fundamentos - Udemy',
    desc: 'Curso de JavaScript focado em aprender os fundamentos e aprimorar bem a base e lógica para avançar na utilização da linguagem com maior segurança.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '11/2022 - 02/2023',
    title: 'Curso de JavaScript - Origamid ',
    desc: '74 horas de curso onde eu aprendi desde os fundamentos básicos até os avançados sobre a linguagem de programação JavaScript. Conhecimentos que foram praticados em projetos que estão no meu portfólio.',
  },
  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '02/2023 - 31/03/2023',
    title: 'React - Origamid  ',
    desc: 'Curso onde aprendi bastante sobre os conceitos fundamentais e também os mais avançados sobre a utilização da biblioteca React.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '87',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Git',
    percentage: '80',
  },

  {
    id: 5,
    title: 'React',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    // img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    // img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
