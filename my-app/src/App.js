import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../src/components/NavBar'
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Projects from '../src/pages/projects/Projects';
import Contact from  '../src/pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='sobre' element={<About />}/>
        <Route path='projetos' element={<Projects />}/>
        <Route path='contato' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
