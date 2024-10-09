import React, { useState, useEffect } from 'react';
import './App.css';
import PerfilImage from "../src/assets/perfilImage.svg";
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Copy from "../src/assets/copy.svg";
import CopyOK from "../src/assets/copyOK.svg";
import Circle from "../src/assets/circle.svg";
import OpMenu from './components/OpMenu';

export default function App() {
  const [icon, setIcon] = useState(Copy);
  const [data, setData] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Davi-Lv/portfolio/refs/heads/main/src/services/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        const emailContact = data.contacts.find(contact => contact.name === "email");
        if (emailContact) {
          setEmail(emailContact.link);
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIcon(CopyOK);
      setTimeout(() => {
        setIcon(Copy);
      }, 1500);
    });
  };

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="App">
      <NavBar />

      <div className='container'>
        <div className="status-trabalho">
          <img src={Circle} alt="disponibilidade" /> <span>{data.availability[0]}</span>
        </div>

        <div className='info'>
          <div className="QuemNome">
            <h1 className='olaeusou'>Olá, eu sou</h1>
            <h1 className='davimordonho'>{data.personal_info.name}</h1>
          </div>
          <p className='paragrafoQuemSou'>{data.personal_info.education}</p>

          <div className="botaobg">
            <button className="saberMais"><span>sobre mim</span></button>
            <button className="saberMais" onClick={handleCopyClick}>
              <img src={icon} alt="copy icon" />Copiar email
            </button>
          </div>
        </div>

        <img className='perfilImage' src={PerfilImage} alt="imagem perfil" />
      </div>

      <OpMenu />

      <Footer />
    </div>
  );
}
