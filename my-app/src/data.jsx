import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import {
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";
import Perfil from "../src/assets/perfil.png";
export const links = [
  {
    id: 1,
    name: "Início",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "Sobre",
    icon: <FaUser className="nav__icon" />,
    path: "/sobre",
  },

  {
    id: 3,
    name: "Projetos",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/projetos",
  },

  {
    id: 4,
    name: "Contato",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contato",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Nome: ",
    description: "João Vitor Melo Kremer",
  },

  {
    id: 3,
    title: "Idade: ",
    description: "24 anos",
  },

  {
    id: 4,
    title: "Nacionalidade: ",
    description: "Brasileiro",
  },

  {
    id: 5,
    title: "Freelance: ",
    description: "Disponível",
  },

  {
    id: 6,
    title: "Endereço:",
    description: "Guarapari - ES",
  },

  {
    id: 8,
    title: "Email : ",
    description: "joaokremer.developer@gmail.com",
  },

  {
    id: 10,
    title: "Idiomas : ",
    description: "Português, Inglês, Japonês e Italiano",
  },
];

export const stats = [
  {
    id: 1,
    no: "5k +",
    title: "Seguidores no<br /> LinkedIn",
  },

  {
    id: 2,
    no: "23+",
    title: "Projetos <br /> Finalizados",
  },

  {
    id: 3,
    no: "1º",
    title: "Semestre em<br /> Engenharia de Software",
  },

  {
    id: 4,
    no: "7",
    title: "Certificados de curso <br />na Área",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "03/2023 - Atualmente",
    title: "Desenvolvedor Front-end Jr - SouJunior",
    desc: 'Como desenvolvedor React no projeto "Vagas", sou responsável por desenvolver e manter os componentes React da aplicação, além de utilizar TypeScript para garantir a tipagem dos dados e melhorar a escalabilidade e manutenção do código. Trabalho com as bibliotecas do React para gerenciamento de estado, roteamento e consultas à API, e utilizo Styled Components para estilizar os componentes da aplicação, seguindo as diretrizes de design definidas para a plataforma. Além disso, testo e faço a depuração da aplicação para garantir o bom funcionamento e a qualidade do código. Sempre alinhado com os requisitos do projeto e com as necessidades dos usuários, buscando propor soluções criativas e eficientes para atingir esses objetivos. É uma experiência enriquecedora, que me permite aprimorar minhas habilidades em desenvolvimento React e em trabalhar em equipe, além de contribuir para o desenvolvimento de uma plataforma que conecta candidatos e empresas de forma eficiente e inovadora.',
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - 2027",
    title: "Bacharelado em Engenharia De Software - Estácio",
    desc: "Engenharia de software é o processo de desenvolver, manter e gerenciar sistemas de software, envolvendo planejamento, análise, design, implementação, teste e manutenção. É uma área interdisciplinar que utiliza princípios da engenharia para garantir que os sistemas de software sejam desenvolvidos de maneira eficiente, eficaz e de acordo com as necessidades dos usuários.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "05/2023 - Atualmente",
    title: "Curso de TypeScript - Origamid",
    desc: "Curso onde aprendi bastante sobre os conceitos fundamentais e também os mais avançados sobre a utilização da biblioteca React.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "03/2023 - 04/2023",
    title: "React do Zero a Maestria - Matheus Battisti",
    desc: "Curso onde aprendi bastante sobre os conceitos fundamentais e também os mais avançados sobre a utilização da biblioteca React.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "02/2023 - 31/03/2023",
    title: "Curso de React Completo - Origamid ",
    desc: "Curso onde aprendi bastante sobre os conceitos fundamentais e também os mais avançados sobre a utilização da biblioteca React.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "11/2022 - 02/2023",
    title: "Curso de JavaScript - Origamid ",
    desc: "74 horas de curso onde eu aprendi desde os fundamentos básicos até os avançados sobre a linguagem de programação JavaScript. Conhecimentos que foram praticados em projetos que estão no meu portfólio.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022 - 10/2022",
    title: "JavaScript Fundamentos - Udemy",
    desc: "Curso de JavaScript focado em aprender os fundamentos e aprimorar bem a base e lógica para avançar na utilização da linguagem com maior segurança.",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022 - 10/2022",
    title: "HTML & CSS - Origamid ",
    desc: "Curso com 46 horas de duração onde aprendi sobre como estruturar e estilizar por completo uma página web com as respectivas tecnologias.",
  },

  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022 - 10/2022)",
    title: "Grid Layout - Origamid ",
    desc: "Curso de especialização em Grid Layout com duração de 10 horas. ",
  },

  {
    id: 9,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022 - 10/2022)",
    title: "Flex-Box Layout - Origamid ",
    desc: "Curso de especialização em Flex Box Layout com duração de 6 horas.",
  },

  {
    id: 9,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022 - 10/2022)",
    title: "Flex-Box Layout - Origamid ",
    desc: "Curso de especialização em Flex Box Layout com duração de 6 horas.",
  },
  
  {
    id: 10,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2022",
    title: "English C1 Certificate - EF Standard English ",
    desc: "Teste de proficiência onde eu obtive nível C1 e constatei que possuo fluência de nível avançado no idioma inglês. Eu falo inglês desde os meus 10 anos e aprendi com jogos e pratiquei com trabalho ao público.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Css",
    percentage: "87",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "90",
  },

  {
    id: 4,
    title: "Git",
    percentage: "80",
  },

  {
    id: 5,
    title: "React",
    percentage: "85",
  },

  {
    id: 6,
    title: "Python",
    percentage: "50",
  },

  {
    id: 7,
    title: "Styled Comp",
    percentage: "80",
  },

  {
    id: 7,
    title: "Tailwind",
    percentage: "80",
  },
  {
    id: 8,
    title: "Bootstrap",
    percentage: "80",
  },
  {
    id: 9,
    title: "Scrum",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Projeto Vagas - SouJunior",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Match entre juniors e empresas",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/SouJunior/vagas-frontend",
      },
      {
        icon: <FaCode />,
        title: "Linguagens : ",
        desc: "TypeScript | React ",
      },
      {
        icon: <FiExternalLink />,
        title: "Site: ",
        desc: "Em fase de desenvolvimento",
      },
    ],
  },

  {
    id: 2,
    title: "MoviesLib",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Consumindo uma API de filmes.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/MoviesLib",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://movies-lib-iota.vercel.app/",
      },
    ],
  },

  {
    id: 3,
    title: "Kremer's Blog",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Blog para postagens",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Kremer-s_blog",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "React JS | Firebase",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://kremer-s-blog.vercel.app/login",
      },
    ],
  },

  {
    id: 4,
    title: "Secret Word",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Jogo de caça-palavras",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/SecretWord",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://secret-word-three-psi.vercel.app/",
      },
    ],
  },

  {
    id: 5,
    title: "Loja de Produtos",
    img: Perfil,
    details: [
      {
        title: "Descrição : ",
        desc: "Menu de produtos de uma loja",
      },
      {
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Renek---Loja",
      },
      {
        title: "Linguagem : ",
        desc: "React JS",
      },
      {
        title: "Site : ",
        desc: "https://vercel.com/joaokremerdev/renek-loja",
      },
    ],
  },

  {
    id: 6,
    title: "Animais Fantásticos",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Falamos sobre alguns animais.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/animais-fantasticos",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "HTML | CSS | JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://joaokremerdev.github.io/animais-fantasticos/",
      },
    ],
  },
  {
    id: 8,
    title: "DevKremer",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Primeiro Portfólio.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Meu-portfolio",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "HTML | CSS | JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://joaokremerdev.github.io/Meu-portfolio/",
      },
    ],
  },
  {
    id: 6,
    title: "BikCraft",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Loja de Bicicletas.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Bikcraft",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "HTML | CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://joaokremerdev.github.io/Bikcraft/",
      },
    ],
  },
  {
    id: 7,
    title: "FlexBlog",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Uma incrível Landing Page.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Flexblog",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "HTML | CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://joaokremerdev.github.io/Flexblog/",
      },
    ],
  },
  {
    id: 8,
    title: "Wildbeast",
    img: Perfil,
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição : ",
        desc: "Uma incrível Landing Page.",
      },
      {
        icon: <FiUser />,
        title: "Repositório : ",
        desc: "https://github.com/JoaoKremerDev/Grid-project",
      },
      {
        icon: <FaCode />,
        title: "Linguagem : ",
        desc: "HTML | CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Site : ",
        desc: "https://joaokremerdev.github.io/Grid-project/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(272.20338983050846, 73.44398340248962%, 47.25490196078431%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(0, 100%, 50%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(210, 100%, 50%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(328.95652173913044, 93.4959349593496%, 51.76470588235295%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(79.88950276243094, 89.16256157635469%, 39.80392156862745%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(29, 100%, 50%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(113.04878048780489, 98.79518072289157%, 32.549019607843135%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const socials = [
  {
    id: 1,
    socialMedia: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    id: 2,
    socialMedia: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://web.whatsapp.com/",
  },
  {
    id: 3,
    socialMedia: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.com/",
  },
  {
    id: 4,
    socialMedia: "Gmail",
    icon: <FaEnvelope />,
    link: "https://mail.google.com/",
  },
  {
    id: 5,
    socialMedia: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
];
