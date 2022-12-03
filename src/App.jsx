import './Styles.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import NavBar from './layout/NavBar';
import Footer from './layout/footer/Index';
import Inicio from './pages/inicio';
import SobreMin from './pages/sobreMin';
import MeusProjetos from './pages/meusProjetos';
import Github from './pages/gitHub';

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/SobreMin">SobreMin</Link>
        </li>
        <li>
          <Link to="/Github">Github</Link>
        </li>
      </ul>


      <NavBar />

      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/SobreMin' element={<SobreMin />} />
        <Route exact path='/MeusProjetos' element={<MeusProjetos />} />
        <Route exact path='/Github' element={<Github />} />
      </Routes>

      <Footer />
    </Router>
  )
}

