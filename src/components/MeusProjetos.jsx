import '../styles/MeusProjetos.css'
import ImgProjeto1 from './../assets/exemploImagemProjeto.png'
import ImgProjeto2 from './../assets/exemploImagemProjeto.png'
import ImgProjeto3 from './../assets/exemploImagemProjeto.png'
import ImgProjeto4 from './../assets/exemploImagemProjeto.png'

export default function MeusProjetos() {
    const projetos = [
        { nome: "teste 1", imagem: ImgProjeto1 },
        { nome: "teste 2", imagem: ImgProjeto2 },
        { nome: "teste 3", imagem: ImgProjeto3 },
        { nome: "teste 4", imagem: ImgProjeto4 }
    ];

    return (
        <div className="meusProjetos">
            <h1 name="projetos">Meus Projetos</h1>
            <div className="projetos">
                {projetos.map((projeto, index) => (
                    <div key={index} className="BlocoProjeto">
                        <div className="picture">
                            <img src={projeto.imagem} alt={`Imagem do ${projeto.nome}`} />
                        </div>
                        <p>{projeto.nome}</p>
                    </div>
                ))}
            </div>
            <button>Ver todos os projetos</button>
        </div>
    )
}
