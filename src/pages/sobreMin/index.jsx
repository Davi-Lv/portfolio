import './Styles.css'
import React from 'react'
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import IFPE from "../../assets/imgIFPE.svg";

export default function SobreMin() {
  return (
    <div className='body'>
      <h1 className='sobreMin'>Sobre min</h1>

      <div className="box boxSobreMin">
        <p className='nomeSobreMin'>Davi Mordonho</p>
        <p className='pequenoResumo'>Estudante de analise e desenvolvimento de sistemas no Instituto Federal de Pernambuco Estudante
          de analise e desenvolvimento de sistemas no Instituto Federal de PernambucoEstudante de analise e
          desenvolvimento de sistemas no Instituto Federal de PernambucoEstudante de analise e desenvolvimento de
          sistemas no Instituto Federal de PernambucoEstudante de analise e desenvolvimento de sistemas no Instituto
          Federal de Pernambuco
        </p>

        <div className="contatosSobreMin">
          <p className='entreEmContato'>Entre em contato</p>
          <div className="redesSobreMin">
            <div class="iconSobreMin">
              <img src={linkedin} alt="linkedin" />
            </div>
            <div class="iconSobreMin">
              <img src={instagram} alt="instagram" />
            </div>
            <div class="iconSobreMin">
              <img src={whatsapp} alt="whatsapp" />
            </div>
            <div class="iconSobreMin">
              <img src={email} alt="email" />
            </div>
            <div class="iconSobreMin">
              <img src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>

      <h1 className='sobreMin'>Historico academico</h1>

      <div className="box">
        <div className="curso">
          <img className='cursoIMG' src={IFPE} alt="" />
          <div className="juntar">
            <p className='paragrafo1'>Integrado - Ensino meio e tecnicno em eletrônica</p>
            <p className='paragrafo2'>Instituto Federal de Pernambuco - Campus Recife</p>
          </div>
        </div>
        <div className="linhaGuia" />
        <div className="curso">
          <img className='cursoIMG' src={IFPE} alt="" />
          <div className="juntar">
            <p className='paragrafo1'>Tecnologo - Análise e Desenvolvimento de Sistemas</p>
            <p className='paragrafo2'>Instituto Federal de Pernambuco - Campus Jaboatão</p>
          </div>
        </div>
      </div>

      <h1 className='sobreMin'>Certificados</h1>

      <div className="box padding">
        <div className="curso certificado">
          <img className='cursoIMG' src='' alt="" />
          <div className="juntar">
            <p className='paragrafo1'>Nome do curso</p>
            <p className='paragrafo2'>Empresa de ensino</p>
          </div>
        </div>
        <div className="curso certificado">
          <img className='cursoIMG' src='' alt="" />
          <div className="juntar">
            <p className='paragrafo1'>Nome do curso</p>
            <p className='paragrafo2'>Empresa de ensino</p>
          </div>
        </div>
      </div>
    </div>
  )
}
