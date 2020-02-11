import React from "react";
import { Container } from "react-bootstrap";
import { translations } from "../../translations";
import './style.scss';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="sponsor-section">
                    <div className="sponsor-logos">
                        <a href="http://www.archives.interieur.gouv.ne/"
                            className="link-image caotofarms"
                            target="_blank"
                            rel="noopener noreferrer">
                        </a>
                        <a href="https://www.dcaf.ch/"
                            className="link-image dcaf"
                            target="_blank"
                            rel="noopener noreferrer">
                        </a>
                        <a href="https://www.geoacenter.com/"
                            className="link-image geocenter"
                            target="_blank"
                            rel="noopener noreferrer">
                        </a>
                    </div>
                </div>
                <p className="copyright-text">
                    {translations.footer_copyright}
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
