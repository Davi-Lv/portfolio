import React, { useState } from 'react';
import './App.css';
import PerfilImage from "../src/assets/perfilImage.svg";
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Copy from "../src/assets/copy.svg";
import CopyOK from "../src/assets/copyOK.svg";
import Circle from "../src/assets/circle.svg";
import OpMenu from './components/OpMenu';
import { TailSpin } from 'react-loader-spinner';
import { TabProvider } from './TabContext';
import data from './services/data.json';

export default function App() {
  const [icon, setIcon] = useState(Copy);
  const [email, setEmail] = useState(() => {
    const emailContact = data.contacts.find(contact => contact.name === "email");
    return emailContact ? emailContact.link : '';
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIcon(CopyOK);
      setTimeout(() => {
        setIcon(Copy);
      }, 1500);
    });
  };

  if (!data) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TailSpin
        height="80"
        width="80"
        color="#ff8a1e"
        ariaLabel="loading"
      />
    </div>;
  }

  return (
    <TabProvider>
      <div className="App">
        <NavBar />

        <div className='container'>
          <div className="status-trabalho">
            <img src={Circle} alt="disponibilidade" /> <span>{data.availability[0]}</span>
          </div>

          <div className='info'>
            <div className="QuemNome">
              <h1 className='olaeusou'>Olá, eu sou</h1>
              <h1 className='myName'>{data.personal_info.name}</h1>
            </div>
            <p className='paragrafoQuemSou'>{data.personal_info.education}</p>

            <div className="botaobg">
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
    </TabProvider>
  );
}
