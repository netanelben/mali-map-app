import React from 'react';
import { Navbar, Image, Container } from "react-bootstrap";

import logo from "../../assets/logos/niger_arms.png";
import { translations } from '../../translations';

function Header() {
  return (
    <Navbar>
      <Container className="navbar-container">
        <Navbar.Brand className="navbar-logo">
          <Image
            alt="logo"
            src={logo}
            width="135"
            className="d-inline-block align-top"
            rounded/>
        </Navbar.Brand>
            <h3>{translations.index_title}</h3>
      </Container>
    </Navbar>
  );
}

export default Header;
