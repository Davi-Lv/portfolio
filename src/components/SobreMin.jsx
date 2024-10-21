import '../styles/SobreMin.css';
import { useEffect, useState, useCallback } from 'react';
import { TailSpin } from 'react-loader-spinner';

const Curso = ({ curso, instituicao, periodo, imagemLink }) => (
    <a className="curso">
        <img src={imagemLink} alt="Imagem" className="cursoImagem" />
        <div className="cursoInfo">
            <p className="cursoPeriodo">{periodo}</p>
            <h3 className="cursoNome">{curso}</h3>
            <p className="cursoInstituicao">{instituicao}</p>
        </div>
    </a>
);

const Certificado = ({ certificado, instituicao, periodo, imagemLink, link }) => (
    <a className="certificado" href={link} target="_blank" rel="noopener noreferrer">
        <img src={imagemLink} alt="Imagem" className="certificadoImagem" />
        <div className="certificadoInfo">
            <p className="certificadoPeriodo">{periodo}</p>
            <h3 className="certificadoNome">{certificado}</h3>
            <p className="certificadoInstituicao">{instituicao}</p>
        </div>
    </a>
);

const Contato = ({ nome, link, imagemLink }) => (
    <a href={link} className="contato" target="_blank" rel="noopener noreferrer">
        <img src={imagemLink} alt={nome} className="contatoImagem" />
    </a>
);

const Experiencia = ({ role, company, periodo, LinkCertificado }) => (
    <a className="experiencia" href={LinkCertificado} target="_blank" rel="noopener noreferrer">
        <div className="experienciaInfo">
            <p className="experienciaPeriodo">{periodo}</p>
            <h3 className="experienciaNome">{role}</h3>
            <p className="experienciaInstituicao">{company}</p>
        </div>
    </a>
);

const Trabalho_Voluntario = ({ image, role, company, periodo }) => (
    <a className="trabalhoVoluntario">
        <img src={image} alt="Imagem" className="trabalhoVoluntarioImagem" />
        <div className="trabalhoVoluntarioInfo">
            <p className="trabalhoVoluntarioPeriodo">{periodo}</p>
            <h3 className="trabalhoVoluntarioNome">{role}</h3>
            <p className="trabalhoVoluntarioInstituicao">{company}</p>
        </div>
    </a>
);

const Menu = ({ activeSection, handleMenuClick }) => (
    <div className="containerAboutMe">
        <div className="menuAboutMe">
            <h2>Lista de Tópicos</h2>
            <div className={`menuItemAboutMe ${activeSection === 'sobreMim' ? 'active' : ''}`}>
                <a href="#sobreMim" onClick={(e) => handleMenuClick(e, 'sobreMim')}>Sobre mim</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'experiencia' ? 'active' : ''}`}>
                <a href="#experiencia" onClick={(e) => handleMenuClick(e, 'experiencia')}>Experiência</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'historicoAcademico' ? 'active' : ''}`}>
                <a href="#historicoAcademico" onClick={(e) => handleMenuClick(e, 'historicoAcademico')}>Histórico acadêmico</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'certificados' ? 'active' : ''}`}>
                <a href="#certificados" onClick={(e) => handleMenuClick(e, 'certificados')}>Certificados</a>
            </div>
            <div className={`menuItemAboutMe ${activeSection === 'trabalhoVoluntario' ? 'active' : ''}`}>
                <a href="#trabalhoVoluntario" onClick={(e) => handleMenuClick(e, 'trabalhoVoluntario')}>Trabalhos Voluntários</a>
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
            rootMargin: '0px',
            threshold: 0.5
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
    }, [data]);

    if (!data) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <TailSpin
                    height="80"
                    width="80"
                    color="#ff8a1e"
                    ariaLabel="loading"
                />
            </div>
        );
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

                <div id="experiencia" className="experienceAboutMe section">
                    <h1 className="experienceTituloAboutMe">Experiência</h1>
                    <div className="experienceList">
                        {data.experience.map((experiencia, index) => (
                            <Experiencia
                                key={index}
                                role={experiencia.role}
                                company={experiencia.company}
                                periodo={experiencia.years}
                                LinkCertificado={experiencia.LinkCertificado}
                            />
                        ))}
                    </div>
                </div>

                <div id="historicoAcademico" className="historyAcademicAboutMe section">
                    <h1 className="historyAcademicTituloAboutMe">Histórico Acadêmico</h1>
                    <div className="courseList">
                        {data.academic_history.map((curso, index) => (
                            <Curso
                                key={index}
                                curso={curso.degree}
                                instituicao={curso.institution}
                                periodo={curso.years}
                                imagemLink={curso.image}
                                link={curso.link}
                            />
                        ))}
                    </div>
                </div>

                <div id="certificados" className="certificatesAboutMe section">
                    <h1 className="certificatesTituloAboutMe">Certificados</h1>
                    <div className="certificateList">
                        {data.certificates.map((certificado, index) => (
                            <Certificado
                                key={index}
                                certificado={certificado.course_name}
                                instituicao={certificado.company}
                                periodo={certificado.shipping_date}
                                imagemLink={certificado.image}
                                link={certificado.link}
                            />
                        ))}
                    </div>
                </div>

                <div id="contato" className="contactsAboutMe section">
                    <h1 className="contactsTituloAboutMe">Entre em Contato</h1>
                    <div className="contactsList">
                        {data.contacts.map((contato, index) => (
                            <Contato
                                key={index}
                                link={contato.link}
                                imagemLink={contato.image}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Menu activeSection={activeSection} handleMenuClick={handleMenuClick} />
        </div>
    );
}