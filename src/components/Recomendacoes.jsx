import '../styles/Recomendacoes.css';
import Book from '../assets/Book.svg';
import Rating from '../assets/ratingIcon.svg';
import React, { useEffect, useState } from 'react';

export default function Recomendacoes() {
    const [selectedRecommendation, setSelectedRecommendation] = useState("biblioteca");
    const [recommendations, setRecommendations] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Davi-Lv/portfolio/refs/heads/main/src/services/data.json')
            .then(response => response.json())
            .then(data => setRecommendations(data.recommendations))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    function handleSelectRecommendation(nome) {
        setSelectedRecommendation(nome.toLowerCase());
    }

    function CardOP({ imgSrc, nome, Subtitulo, texto, onClick, isSelected }) {
        return (
            <div className={`cardOP ${isSelected ? 'selected' : ''}`} onClick={onClick}>
                <div className="cardOP-header">
                    <img src={imgSrc} alt="Foto de perfil" />
                    <div className="cardOP-header-info">
                        <h2>{nome}</h2>
                        <p>{Subtitulo}</p>
                    </div>
                </div>
                <div className="linha" />
                <div className="cardOP-body">
                    <p>{texto}</p>
                </div>
            </div>
        );
    }

    function CardRecomedacoes({ imgSrc, title, description, rating, pages, link }) {
        return (
            <div className="cardRecomedacoes">
                <div className="cardRecomedacoes-header">
                    <img src={imgSrc} alt="Foto de perfil" />
                    <div className="cardRecomedacoes-header-info">
                        <a href={link} title={title}>{title}</a>
                        <p title={description}>{description}</p>
                        <div className="ratingAndPages">
                            <img src={Rating} alt="Rating" /><p>{rating} {pages ? `| ${pages} páginas` : ''} </p>
                        </div>
                        <a href={link} className="LinkAmazon">Ver na amazon</a>
                    </div>
                </div>
            </div>
        );
    }

    const renderRecommendations = () => {
        if (!recommendations[selectedRecommendation]) return null;

        return recommendations[selectedRecommendation].map(rec => (
            <CardRecomedacoes
                key={rec.id}
                imgSrc={rec.image}
                title={rec.title.replace(/_/g, ' ')}
                description={rec.description}
                rating={rec.rating}
                pages={rec.pages}
                link={rec.link}
            />
        ));
    };

    return (
        <div>
            <div className="opRecomedacoes">
                <CardOP
                    imgSrc={Book}
                    nome="Biblioteca"
                    Subtitulo="Livros que me fizeram pensar fora da caixa."
                    texto="Aprenda e evolua com essa leitura essencial!"
                    onClick={() => handleSelectRecommendation("biblioteca")}
                    isSelected={selectedRecommendation === "biblioteca"}
                />
                <CardOP
                    imgSrc={Book}
                    nome="Dicas de Presentes"
                    Subtitulo="Sugestões de presentes incríveis."
                    texto="Encontre o presente perfeito!"
                    onClick={() => handleSelectRecommendation("dicas_de_presentes")}
                    isSelected={selectedRecommendation === "dicas_de_presentes"}
                />
                <CardOP
                    imgSrc={Book}
                    nome="Para Desenvolvedores"
                    Subtitulo="Livros essenciais para desenvolvedores."
                    texto="Melhore suas habilidades de programação!"
                    onClick={() => handleSelectRecommendation("para_desenvolvedor")}
                    isSelected={selectedRecommendation === "Para_desenvolvedor"}
                />
            </div>

            <div className="recomendacaoSelecionada">
                Recomendação selecionada: <strong>{selectedRecommendation.replace(/_/g, ' ')}</strong>
            </div>

            <div className="recomendacoes">
                {renderRecommendations()}
            </div>
        </div>
    );
}