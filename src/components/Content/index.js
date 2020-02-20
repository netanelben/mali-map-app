import React from "react";
import GraphicsPage from './GraphicsPage';
import './style.scss';

function Content({ showMap }) {

    return (
        <div className="content">
            {showMap ? <div id="map">
                <div id="popup" class="ol-popup">
                    <a href="#" id="popup-closer" class="ol-popup-closer"/>
                    <div id="popup-content"></div>
                </div>
            </div> : <GraphicsPage/>}
        </div>
    );
}

export default Content;
