import "../styles/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
    return (
        <header className='menu'>
            <div className="nav">
                <button className='buttomNav botaoMenu'>
                    Linkedin
                </button>
                <button className='buttomNav botaoMenu'>
                    GitHub
                </button>
                <Link ignoreCancelEvents spy={true} offset={-20} duration={1000} to="projetos" smooth={true}>
                    <button className='buttomNav botaoMenu'>
                        Alguns Projetos
                    </button>
                </Link>
            </div>

            <a href="#Contatos">
                <Link ignoreCancelEvents spy={true} offset={-45} duration={1000} to="Contatos" smooth={true}>
                    <button href="#Contatos" className='botaoContatos'>
                        Contatos
                    </button>
                </Link>
            </a>
        </header>
    )
}