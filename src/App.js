import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [showMap, setshowMap] = useState(true);

    return (
        <div className="App wrapper">
            <Header/>
            <Container fluid>
                <Row>
                    <Col sm={2} className="side-menu-wrapper">
                        <SideMenu setshowMap={setshowMap}/>
                    </Col>
                    <Col sm={10}>
                        <Content showMap={showMap}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
