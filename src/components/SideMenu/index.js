import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { communes } from './communes.json';
import './style.scss';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const SELECT_OPTIONS = communes.map((c) => c.Commune).filter(onlyUnique);

const changeHandler = (event) => {
    const communeName = event.target.innerText;
    const prefix = 'https://niger-commune.s3.eu-central-1.amazonaws.com/report_';
    const url = `${prefix}${communeName}_2020-02-11.html`;

    window.open(url, '_blank');
};

const SideMenu = () => (
    <nav className="side-menu">
        <a href="/">Carte</a>
        <a href="/graphiques.html" target="_blank">Graphiques</a>
        {/* <select onChange={changeHandler}>
            <option>Sélectionnez une commune</option>
            {SELECT_OPTIONS.map((opt) => (<option>{opt}</option>))}
        </select> */}
        <Autocomplete
            className="select-commune"
            options={SELECT_OPTIONS}
            getOptionLabel={option => option}
            style={{ width: 220 }}
            onChange={changeHandler}
            renderInput={params => (
                <TextField {...params} label="Sélectionnez une commune" variant="outlined" fullWidth />
            )}/>
    </nav>
);

export default SideMenu;
