import React from "react";
import { Container } from "react-bootstrap";
import './style.scss';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="sponsor-section">
                    <div className="sponsor-logos">
                        <a href="https://www.geoacenter.com/"
                            className="link-image geocenter"
                            target="_blank"
                            rel="noopener noreferrer">
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
