import React from 'react';
import { Row, Col } from "react-bootstrap";
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App wrapper">
            <Header/>
            <Row>
                <Col sm={2} className="side-menu-wrapper">
                    <SideMenu/>
                </Col>
                <Col sm={10}>
                    <Content/>
                </Col>
            </Row>
            <Footer/>
        </div>
    );
}

export default App;
