import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import "../styles/OpMenu.css";

import Recomendacoes from './Recomendacoes';
import SobreMin from './SobreMin';
import MeusProjetos from './MeusProjetos';
import GitHub from './GitHub';
import Contacts from './Contacts';

const tabs = [
    { name: 'Minhas Recomendações', id: 'recomendacoes' },
    { name: 'Sobre mim', id: 'sobre' },
    { name: 'Meus projetos', id: 'projetos' },
    { name: 'Github', id: 'github' },
    { name: 'Contatos', id: 'contatos' },
];

const TabButton = memo(({ tab, isActive, onClick }) => (
    <button
        className={`tab ${isActive ? 'active' : ''}`}
        onClick={() => onClick(tab.id)}
    >
        {tab.name}
    </button>
));

TabButton.propTypes = {
    tab: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const OpMenu = () => {
    const [activeTab, setActiveTab] = useState('recomendacoes');

    const openTab = (tabId) => {
        setActiveTab(tabId);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'recomendacoes':
                return <Recomendacoes />;
            case 'sobre':
                return <SobreMin />;
            case 'projetos':
                return <MeusProjetos />;
            case 'github':
                return <GitHub />;
            case 'contatos':
                return <Contacts />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="OpMenu">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        tab={tab}
                        isActive={activeTab === tab.id}
                        onClick={openTab}
                    />
                ))}
            </div>

            <div className="tabcontent">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default OpMenu;