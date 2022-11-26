import './index.css'

//Calculadora com Java e React.js

export default function Projetos({picture, nomeDoProjeto}) {
    return (
        <>
            <div className="BlocoProjeto">
                <div className="picture">
                    <img src={picture} alt="Imagem do Projeto" />
                </div>
                <p>{nomeDoProjeto}</p>
            </div>
        </>
    )
}





