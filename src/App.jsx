import './App.css'
import Projetos from './components/projetos'
import ImgProjetoQuemSou from "../src/assets/Group 1.png";
import Html5 from '../src/assets/html5.svg'
import CSS3 from '../src/assets/css3.svg'
import Java from "../src/assets/java.svg";
import JavaScript from "../src/assets/javascript.svg";
import ReacteReactNative from "../src/assets/react.svg";
import GiteGitHub from "../src/assets/gitEGithub.svg";
import Figma from "../src/assets/figma.svg";
import Photoshop from "../src/assets/photoshop.svg";
import Ilustrator from "../src/assets/ilustrator.svg";
import linkedin from "../src/assets/linkedin.svg";
import instagram from "../src/assets/instagram.svg";
import whatsapp from "../src/assets/whatsapp.svg";
import email from "../src/assets/email.svg";
import github from "../src/assets/github.svg";
import reactIcon from "../src/assets/reactIcon.svg";

export default function App() {
  return (
    <body className="App">

      <header className='menu'>
        <div className="nav">
          <button className='buttomNav botaoMenu'>
            Sobre min
          </button>
          <button className='buttomNav botaoMenu'>
            GitHub
          </button>
          <button className='buttomNav botaoMenu'>
            Meus projetos
          </button>
        </div>

        <button className='botaoContatos'>
          Meus contatos
        </button>
      </header>

      <div className='QuemSou'>
        <div>
          <h1 className='olaeusou'>Olá, eu sou</h1>
          <h1 className='davimordonho'>Davi Mordonho</h1>
          <p className='paragrafoQuemSou'>Estudante de analise e desenvolvimento de sistemas no Instituto Federal de Pernambuco</p>
          <button className="saberMais"><span>sobre mim</span></button>
        </div>

        <div className='imgQuemSou'>
          <img src={ImgProjetoQuemSou} alt="imagens: exemplos de projetos" />
        </div>
      </div>

      <div className="habilidades">

        <h1>Habilidade</h1>
        <div className="bloco1">
          <div className='iconAndName'>
            <img src={Html5} alt="HTML 5" />
            <p>HTML 5</p>
          </div>
          <div className='iconAndName'>
            <img src={CSS3} alt="CSS 3" />
            <p>CSS 3</p>
          </div>
          <div className='iconAndName'>
            <img src={Java} alt="Java" />
            <p>Java</p>
          </div>
        </div>
        <div className="bloco2">
          <div className='iconAndName'>
            <img src={JavaScript} alt="JavaScript" />
            <p>JavaScript</p>
            <p></p>
          </div>
          <div className='iconAndName'>
            <img src={ReacteReactNative} alt="React e React Native" />
            <p>React.Js</p>
          </div>
          <div className='iconAndName'>
            <img src={GiteGitHub} alt="Git e GitHub" />
            <p>Git e GitHub</p>
          </div>
        </div>

        <div className="linha" />

        <div className="bloco3">
          <div className='iconAndName'>
            <img src={Figma} alt="Figma" />
            <p>Figma</p>
          </div>
          <div className='iconAndName'>
            <img src={Photoshop} alt="Photoshop" />
            <p>Photoshop</p>
          </div>
          <div className='iconAndName'>
            <img src={Ilustrator} alt="Ilustrator" />
            <p>Ilustrator</p>
          </div>
        </div >
      </div >

      <div className="meusProjetos">
        <h1>Meus Projetos</h1>
        <div className="projetos">
          <Projetos nomeDoProjeto="teste 1" />
          <Projetos nomeDoProjeto="teste 2" />
          <Projetos nomeDoProjeto="teste 3" />
          <Projetos nomeDoProjeto="teste 4" />
        </div>
        <button>Ver todos os projetos</button>
      </div>

      <div className="linha2" />

      <div className="contatos">
        <p>Contatos</p>
      </div>

      <div className="redes wrapper">

        <div class="icon linkedin">
          <span class="tooltip">linkedin</span>
          <img src={linkedin} alt="linkedin" />
        </div>

        <div class="icon Instagram">
          <span class="tooltip">Instagram</span>
          <img src={instagram} alt="instagram" />
        </div>

        <div class="icon Whatsapp">
          <span class="tooltip">Whatsapp</span>
          <img src={whatsapp} alt="whatsapp" />
        </div>

        <div class="icon Email">
          <span class="tooltip">Email</span>
          <img src={email} alt="email" />
        </div>

        <div class="icon GitHub">
          <span class="tooltip">GitHub</span>
          <img src={github} alt="github" />
        </div>

      </div>

      <div className="linha3" />

      <div className="footer">
        <p className='portfolio'>Portifolio desenvolvido por</p>
        <p className='nome'>@Davii_Lv</p>
        <img src={reactIcon} alt="reactIcon" />
      </div>

    </body>
  )
}

