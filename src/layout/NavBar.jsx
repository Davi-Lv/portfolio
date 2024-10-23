import "../styles/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useContext } from "react";
import { TabContext } from '../TabContext';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setActiveTab } = useContext(TabContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleContatosClick = () => {
        setActiveTab('contatos');
        closeMenu();
    };

    return (
        <header className='menu'>
            <button className='hamburger' onClick={toggleMenu}>
                &#9776;
            </button>
            <div className={`nav ${menuOpen ? 'active' : ''}`}>
                <a href="https://www.linkedin.com/in/davi-mordonho-277948236/" target="_blank" rel="noopener noreferrer">
                    <button className='buttomNav botaoMenu' onClick={closeMenu}>
                        Linkedin
                    </button>
                </a>
                <a href="https://github.com/Davi-Lv" target="_blank" rel="noopener noreferrer">
                    <button className='buttomNav botaoMenu' onClick={closeMenu}>
                        GitHub
                    </button>
                </a>
            </div>

            <Link ignoreCancelEvents spy={true} offset={-45} duration={1000} to="opMenu" smooth={true} onClick={handleContatosClick}>
                <button className='botaoContatos'>
                    Contatos
                </button>
            </Link>
        </header>
    )
}