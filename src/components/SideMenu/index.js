import React from 'react';
import { communes } from './communes.json';
import './style.scss';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const SELECT_OPTIONS = communes.map((c) => c.Commune).filter(onlyUnique);

const changeHandler = (event) => {
    const communeName = event.target.value;
    const url = `https://res.cloudinary.com/dfoj36sbh/raw/upload/v1581540244/niger_communes/report_${communeName}_2020-02-11_claru5.html`;

    window.open(url, '_blank');
};

const SideMenu = () => (
    <nav className="side-menu">
        <a href="/Carte">Carte</a>
        <a href="/Graphiques">Graphiques</a>
        <select onChange={changeHandler}>
            <option>Sélectionnez une commune</option>
            {SELECT_OPTIONS.map((opt) => (<option>{opt}</option>))}
        </select>
    </nav>
);

export default SideMenu;
