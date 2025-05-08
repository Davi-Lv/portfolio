import "../styles/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useRef, useState, useContext } from "react";
import { TabContext } from '../TabContext';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setActiveTab } = useContext(TabContext);
    const navRef = useRef(null);

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

    // Fechar o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu') && !event.target.closest('.hamburger')) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

        // Fechar o menu quando rolar a página
        useEffect(() => {
            const handleScroll = () => {
                if (menuOpen) {
                    closeMenu();
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [menuOpen]);

    return (
        <header className='menu'>
            <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </button>
            <div className={`nav ${menuOpen ? 'active' : ''}`} ref={navRef}>
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