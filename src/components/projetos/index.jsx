import './index.css'
import ImgProjeto from './../../assets/exemploImagemProjeto.png'

//Calculadora com Java e React.js

export default function Projetos({ nomeDoProjeto }) {
    return (
        <>
            <div className="BlocoProjeto">
                <div className="picture">
                    <img src={ImgProjeto} alt="Imagem do Projeto" />
                </div>
                <p>{nomeDoProjeto}</p>
            </div>
        </>
    )
}





