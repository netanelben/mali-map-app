import React from 'react';
import './style.scss';

const SELECT_OPTIONS = [
    'opt 1'
];

const SideMenu = () => (
    <nav className="side-menu">
        <a href="/Carte">Carte</a>
        <a href="/Graphiques">Graphiques</a>
        <select>
            <option>Select commune</option>
            {SELECT_OPTIONS.map((opt) => (<option>{opt}</option>))}
        </select>
    </nav>
);

export default SideMenu;
