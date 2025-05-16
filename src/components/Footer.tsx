// // src/components/Footer.tsx
// import React from "react";
// import { Container } from "react-bootstrap";

// const Footer: React.FC = () => (
//   <footer className="bg-light text-center py-3 mt-auto">
//     <Container>
//       <p className="mb-0">
//         &copy; {new Date().getFullYear()} LegalDesk AI. All rights reserved.
//       </p>
//     </Container>
//   </footer>
// );

// export default Footer;

// src/components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa/index.js";
import "./styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light pt-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col
            md={4}
            className="mb-3 mb-md-0 d-flex flex-column align-items-center"
          >
            <img
              src="/images/logo-white.png"
              alt="Logo"
              className="footer-logo mb-2"
            />
            <p className="small">
              Empowering Legal Professionals with AI-Driven Solutions
            </p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/data-services">Data Services</a>
              </li>
              <li>
                <a href="/catalog-services">Catalog Services</a>
              </li>
              <li>
                <a href="/integration-services">Integration Services</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold text-white">Contact</h6>
            <p className="small mb-1">contact@legaldeskai.com</p>
            <p className="small mb-2">+1 (555) 123-4567</p>
            <div className="footer-icons">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-light my-4" />

        <p className="text-center small mb-0">
          &copy; 2025 LegalDesk AI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
