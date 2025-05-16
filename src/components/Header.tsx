// src/components/Header.tsx
// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => (
//   <Navbar bg="light" expand="lg" fixed="top">
//     <Navbar.Brand as={Link} to={"/"}>
//       LegalDesk AI
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
//         <Nav.Link as={Link} to="/data-services">
//           Data Services
//         </Nav.Link>
//         <Nav.Link as={Link} to="/catalog-services">
//           Catalog Services
//         </Nav.Link>
//         <Nav.Link as={Link} to="/integration-services">
//           Integration Services
//         </Nav.Link>
//         <Nav.Link as={Link} to="/pricing">
//           Pricing
//         </Nav.Link>
//         <Nav.Link as={Link} to="/about-us">
//           About Us
//         </Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

// export default Header;

// src/components/Header.tsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./styles/Header.css";

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Data Services", path: "/data-services" },
    { label: "Catalog Services", path: "/catalog-services" },
    { label: "Integration Services", path: "/integration-services" },
    { label: "Pricing", path: "/pricing" },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="custom-navbar shadow-sm"
    >
      <Container fluid className="px-4">
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center"
        >
          <img
            src="/images/Legal_logo.png"
            alt="logo"
            width="30"
            height="30"
            className="me-2"
          />
          LEGAL DESK AI
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            {navLinks.map((link, idx) => (
              <Nav.Link
                as={Link}
                to={link.path}
                key={idx}
                className={`nav-link-custom ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-dark" className="rounded-0 px-4 py-1">
              REGISTER
            </Button>
            <Button variant="outline-dark" className="rounded-0 px-4 py-1">
              LOGIN
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
