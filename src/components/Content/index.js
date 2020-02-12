import React from "react";
import './style.scss';

function Home() {

    return (
        <div className="content">
            <div id="map">
                <div id="popup" class="ol-popup">
                    <a href="#" id="popup-closer" class="ol-popup-closer"/>
                    <div id="popup-content"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
