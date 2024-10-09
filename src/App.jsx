import React, { useState } from 'react';
import './App.css';
import Projetos from './components/MeusProjetos';
import PerfilImage from "../src/assets/perfilImage.svg";
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Copy from "../src/assets/copy.svg";
import CopyOK from "../src/assets/copyOK.svg";
import Circle from "../src/assets/circle.svg";

export default function App() {
  const [icon, setIcon] = useState(Copy);
  const copyEmail = "josedavimordonhoguimaraes@gmail.com";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
      setIcon(CopyOK);
      setTimeout(() => {
        setIcon(Copy);
      }, 1500);
    });
  };

  return (
    <div className="App">

      <NavBar />

      <div className='container'>
        <div className="status-trabalho">
          <img src={Circle} alt="" /> <span>Disponível para trabalho</span>
        </div>

        <div className='info'>
          <div className="QuemNome">
            <h1 className='olaeusou'>Olá, eu sou</h1>
            <h1 className='davimordonho'>Davi Mordonho</h1>
          </div>
          <p className='paragrafoQuemSou'>Estudante de analise e desenvolvimento de sistemas no Instituto Federal de Pernambuco</p>

          <div className="botaobg">
            <button className="saberMais"><span>sobre mim</span></button>
            <button className="saberMais" onClick={handleCopyClick}>
              <img src={icon} alt="copy icon" />Copiar email
            </button>
          </div>
        </div>

        <img className='perfilImage' src={PerfilImage} alt="imagens: exemplos de projetos" />
      </div>

      <Projetos />

      <Footer />
    </div>
  );
}