import './App.css'

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

        <div className='botaoContatos'>
          Contatos
        </div>
      </header>

      <div className='QuemSou'>
        <div>
          <h1 className='olaeusou'>Olá, eu sou</h1>
          <h1 className='davimordonho'>Davi Mordonho</h1>
          <p className='paragrafoQuemSou'>Estudante de analise e desenvolvimento de sistemas no Instituto Federal de Pernambuco</p>
          <button className="saberMais"><span>Saber mais</span></button>
        </div>

        <div className='imgQuemSou'>
          <img src="../src/assets/Group 1.png" alt="imagens: exemplos de projetos" />
        </div>
      </div>

      <div className="habilidades">

        <h1>Habilidade</h1>
        <div className="bloco">
          <div>
            <img src="../src/assets/html5.svg" alt="HTML 5" />
            <p>HTML 5</p>
          </div>
          <div>
            <img src="../src/assets/css3.svg" alt="CSS 3" />
            <p>CSS 3</p>
          </div>
          <div>
            <img src="../src/assets/java.svg" alt="Java" />
            <p>Java</p>
          </div>
        </div>
        <div className="bloco">
          <div>
            <img src="../src/assets/javascript.svg" alt="JavaScript" />
            <p>JavaScript</p>
            <p></p>
          </div>
          <div>
            <img src="../src/assets/react.svg" alt="React e React Native" />
            <p>React.Js</p>
          </div>
          <div>
            <img src="../src/assets/gitEGithub.svg" alt="Git e GitHub" />
            <p>Git e GitHub</p>
          </div>
        </div>

        <div className="linha" />

        <div className="bloco">
          <div>
            <img src="../src/assets/figma.svg" alt="Figma" />
            <p>Figma</p>
          </div>
          <div>
            <img src="../src/assets/photoshop.svg" alt="Photoshop" />
            <p>Photoshop</p>
          </div>
          <div>
            <img src="../src/assets/ilustrator.svg" alt="Ilustrator" />
            <p>Ilustrator</p>
          </div>
        </div >
      </div >

    </body >
  )
}

