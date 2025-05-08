import React, { useEffect, useState } from 'react';
import '../styles/Contacts.css';
import { TailSpin } from 'react-loader-spinner';
import data from '../services/data.json';

const Contato = ({ nome, link, imagemLink }) => (
    <a href={link} className="contato" target="_blank" rel="noopener noreferrer">
        <img src={imagemLink} alt={nome} className="contatoImagem" />
    </a>
);

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setContacts(data.contacts);
        setLoading(false);
    }, []);

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <TailSpin
                height="80"
                width="80"
                color="#ff8a1e"
                ariaLabel="loading"
            />
        </div>;
    }

    return (
        <div id="contato" className="contactsPage section">
            <h1 className="contactsTituloAboutMe">Entre em Contato</h1>
            <div className="contactsList">
                {contacts.map((contato, index) => (
                    <Contato
                        key={index}
                        nome={contato.nome}
                        link={contato.link}
                        imagemLink={contato.image}
                    />
                ))}
            </div>
        </div>
    );
}