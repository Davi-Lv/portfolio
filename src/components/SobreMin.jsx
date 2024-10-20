import '../styles/SobreMin.css';
import { useEffect, useState, useCallback } from 'react';

const Curso = ({ curso, instituicao, periodo, imagemLink }) => (
    <div className="curso">
        <img src={imagemLink} alt="Imagem" className="cursoImagem" />
        <div className="cursoInfo">
            <p className="cursoPeriodo">{periodo}</p>
            <h3 className="cursoNome">{curso}</h3>
            <p className="cursoInstituicao">{instituicao}</p>
        </div>
    </div>
);

const Certificado = ({ certificado, instituicao, periodo, imagemLink }) => (
    <div className="certificado">
        <img src={imagemLink} alt="Imagem" className="certificadoImagem" />
        <div className="certificadoInfo">
            <p className="certificadoPeriodo">{periodo}</p>
            <h3 className="certificadoNome">{certificado}</h3>
            <p className="certificadoInstituicao">{instituicao}</p>
        </div>
    </div>
);

const Menu = ({ activeSection, handleMenuClick }) => (
    <div className="containerAboutMe">
        <div className="menuAboutMe">
            <h2>Lista de Tópicos</h2>
            <div className={`menuItemAboutMe ${activeSection === 'sobreMim' ? 'active' : ''}`}>
                <a href="#sobreMim" onClick={(e) => handleMenuClick(e, 'sobreMim')}>Sobre mim</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'historicoAcademico' ? 'active' : ''}`}>
                <a href="#historicoAcademico" onClick={(e) => handleMenuClick(e, 'historicoAcademico')}>Histórico acadêmico</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'certificados' ? 'active' : ''}`}>
                <a href="#certificados" onClick={(e) => handleMenuClick(e, 'certificados')}>Certificados</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'contato' ? 'active' : ''}`}>
                <a href="#contato" onClick={(e) => handleMenuClick(e, 'contato')}>Entre em Contatos</a>
            </div>
        </div>
    </div>
);

export default function SobreMin() {
    const [activeSection, setActiveSection] = useState('sobreMim');
    const [data, setData] = useState(null);

    const handleMenuClick = useCallback((event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    }, []);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Davi-Lv/portfolio/refs/heads/main/src/services/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const options = {
            root: null,
            rootMargin: '0px 0px 0% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    if (!data) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="AboutMe">
            <div className="AboutMeAndContent">
                <div id="sobreMim" className="aboutMe section">
                    <h2 className='AboutMeTitle'>Sobre mim</h2>
                    <div className="aboutMeContent">
                        <h3 className="aboutMeTitulo">{data.personal_info.name}</h3>
                        <p className="aboutMeDescricao">{data.personal_info.about_me}</p>
                    </div>
                </div>

                <div id="historicoAcademico" className="historyAcademicAboutMe section">
                    <h1 className="historyAcademicTituloAboutMe">Histórico Acadêmico</h1>
                    {data.academic_history.map((curso, index) => (
                        <Curso
                            key={index}
                            curso={curso.degree}
                            instituicao={curso.institution}
                            periodo={curso.years}
                            imagemLink="Imagem"
                        />
                    ))}
                </div>

                <div id="certificados" className="certificatesAboutMe section">
                    <h1 className="certificatesTituloAboutMe">Certificados</h1>
                    {data.certificates.map((certificado, index) => (
                        <Certificado
                            key={index}
                            certificado={certificado.course_name}
                            instituicao={certificado.company}
                            periodo="Período"
                            imagemLink="Imagem"
                        />
                    ))}
                </div>

                <div id="contato" className="contactsAboutMe section">
                    <h1 className="contactsTituloAboutMe">Entre em Contato</h1>
                    {data.contacts.map((contato, index) => (
                        <p key={index}><a href={contato.link}>{contato.name}</a></p>
                    ))}
                </div>
            </div>

            <Menu activeSection={activeSection} handleMenuClick={handleMenuClick} />
        </div>
    );
}