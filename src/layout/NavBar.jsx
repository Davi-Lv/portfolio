import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='menu'>
        <div className="nav">
          <Link to="/">
            <button className='buttomNav botaoMenu'>
              Inicio
            </button>
          </Link>
          <button className='buttomNav botaoMenu'>
            GitHub
          </button>

          <Link to="/MeusProjetos">
            <button className='buttomNav botaoMenu'>
              Meus projetos
            </button>
          </Link>

        </div>

        <button href="#Contatos" className='botaoContatos'>
          Meus contatos
        </button>

      </header>
    )
}