import '../styles/SobreMin.css';

export default function SobreMin() {

    const Curso = ({ Curso, Instituicao, Periodo, ImagemLink }) => {
        return (
            <div>
                <img src={ImagemLink} alt="Imagem" />
                <div className="cursoInfo">
                    <p>{Periodo}</p>
                    <h3>{Curso}</h3>
                    <p>{Instituicao}</p>
                </div>
            </div>
        );
    }

    const Certificado = ({ Certificado, Instituicao, Periodo, ImagemLink }) => {
        return (
            <div>
                <img src={ImagemLink} alt="Imagem" />
                <div className="certificadoInfo">
                    <p>{Periodo}</p>
                    <h3>{Certificado}</h3>
                    <p>{Instituicao}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="AboutMe">
                <h1>nomeAPI</h1>
                <p>Descrição da API</p>
            </div>

            {/*historico academico*/}
            <div className="HistoryAcademic">
                <Curso Curso="Curso" Instituicao="Instituição" Periodo="Período" ImagemLink="Imagem" />
            </div>

            {/*Certificados*/}
            <div className="Certificates">
                <Certificado Certificado="Certificado" Instituicao="Instituição" Periodo="Período" ImagemLink="Imagem" />
            </div>


            {/*Entre em contato*/}
            <div className="contacts">
                
            </div>
        </div>
    );
}