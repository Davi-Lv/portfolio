import './App.css'
import Projetos from './components/projetos'

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
          <img src="../src/assets/Group 1.png" alt="imagens: exemplos de projetos" />
        </div>
      </div>

      <div className="habilidades">

        <h1>Habilidade</h1>
        <div className="bloco1">
          <div className='iconAndName'>
            <img src="../src/assets/html5.svg" alt="HTML 5" />
            <p>HTML 5</p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/css3.svg" alt="CSS 3" />
            <p>CSS 3</p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/java.svg" alt="Java" />
            <p>Java</p>
          </div>
        </div>
        <div className="bloco2">
          <div className='iconAndName'>
            <img src="../src/assets/javascript.svg" alt="JavaScript" />
            <p>JavaScript</p>
            <p></p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/react.svg" alt="React e React Native" />
            <p>React.Js</p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/gitEGithub.svg" alt="Git e GitHub" />
            <p>Git e GitHub</p>
          </div>
        </div>

        <div className="linha" />

        <div className="bloco3">
          <div className='iconAndName'>
            <img src="../src/assets/figma.svg" alt="Figma" />
            <p>Figma</p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/photoshop.svg" alt="Photoshop" />
            <p>Photoshop</p>
          </div>
          <div className='iconAndName'>
            <img src="../src/assets/ilustrator.svg" alt="Ilustrator" />
            <p>Ilustrator</p>
          </div>
        </div >
      </div >

      <div className="meusProjetos">
        <h1>Meus Projetos</h1>
        <div className="projetos">
          <Projetos nomeDoProjeto="teste 1" picture="../src/assets/exemploImagemProjeto.png" />
          <Projetos nomeDoProjeto="teste 2" picture="../src/assets/exemploImagemProjeto.png" />
          <Projetos nomeDoProjeto="teste 3" picture="../src/assets/exemploImagemProjeto.png" />
          <Projetos nomeDoProjeto="teste 4" picture="../src/assets/exemploImagemProjeto.png" />
        </div>
        <button>Ver todos os projetos</button>
      </div>

      <div className="linha2" />

      <div className="contatos">
        <p>Interessado em entrar em contato ?</p>
      </div>

      <div className="redes wrapper">

        <div class="icon linkedin">
          <span class="tooltip">Instagram</span>
          <img src="./src/assets/linkedin.svg" alt="linkedin" />
        </div>

        <div class="icon Instagram">
          <span class="tooltip">Instagram</span>
          <img src="./src/assets/instagram.svg" alt="instagram" />
        </div>

        <div class="icon Whatsapp">
          <span class="tooltip">Whatsapp</span>
          <img src="./src/assets/whatsapp.svg" alt="whatsapp" />
        </div>

        <div class="icon Email">
          <span class="tooltip">Email</span>
          <img src="./src/assets/email.svg" alt="email" />
        </div>

        <div class="icon GitHub">
          <span class="tooltip">GitHub</span>
          <img src="./src/assets/github.svg" alt="github" />
        </div>

      </div>

      <div className="linha3" />

      <div className="footer">
        <p className='portfolio'>Portifolio desenvolvido por</p>
        <p className='nome'>@Davii_Lv</p>
        <img src="./src/assets/reactIcon.svg" alt="reactIcon" />
      </div>

    </body>
  )
}

