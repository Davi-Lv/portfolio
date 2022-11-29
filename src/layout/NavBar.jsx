import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
    return (
        <header className='menu'>
            <div className="nav">
                <button className='buttomNav botaoMenu'>
                    Sobre min
                </button>
                <button className='buttomNav botaoMenu'>
                    GitHub
                </button>
                <Link ignoreCancelEvents spy={true} offset={-20} duration={1000} to="projetos" smooth={true}>
                    <button className='buttomNav botaoMenu'>
                        Meus projetos
                    </button>
                </Link>
            </div>

            <a href="#Contatos">
                <Link ignoreCancelEvents spy={true} offset={-45} duration={1000} to="Contatos" smooth={true}>
                    <button href="#Contatos" className='botaoContatos'>
                        Meus contatos
                    </button>
                </Link>
            </a>
        </header>
    )
}