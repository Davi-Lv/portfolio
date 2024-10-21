import React, { useEffect, useState } from 'react';
import '../styles/GitHub.css';
import { TailSpin } from 'react-loader-spinner';

export default function GitHub() {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const profileResponse = await fetch('https://api.github.com/users/Davi-Lv');
                const profileData = await profileResponse.json();
                setProfile(profileData);

                const reposResponse = await fetch(`https://api.github.com/users/Davi-Lv/repos?sort=created&direction=desc`);
                const reposData = await reposResponse.json();
                setRepos(reposData.slice(0, 5));
            } catch (error) {
                console.error('Erro ao buscar dados do GitHub:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!profile || !repos.length) {
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
        <div className="profile">
            <div className='profile-header'>
                <img src={profile.avatar_url} alt="Avatar" />
                <a className="github-button" href={`https://github.com/${profile.login}`} data-size="large" aria-label={`Seguir @${profile.login} no GitHub`} target="_blank" rel="noopener noreferrer">Seguir @{profile.login}</a>
            </div>
            <div className='profile-info'>
                <h1>{profile.name}</h1>
                <p>{profile.bio}</p>
                <p>Repositórios Públicos: {profile.public_repos}</p>
                <p>Localização: {profile.location}</p>
                <p>Empresa: {profile.company}</p>
                <div className='followers'>
                    <p>Seguidores: {profile.followers}</p>
                    <p>Seguindo: {profile.following}</p>
                </div>
            </div>

            <div className='repos'>
                <h2>Repositórios Recentes:</h2>
                <ul>
                    {repos.map(repo => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            <span> ({repo.language})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}