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
// import React from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import "./styles/Header.css";

// const Header: React.FC = () => {
//   const location = useLocation();

//   const navLinks = [
//     { label: "Home", path: "/" },
//     { label: "Data Services", path: "/data-services" },
//     { label: "Catalog Services", path: "/catalog-services" },
//     { label: "Integration Services", path: "/integration-services" },
//     { label: "Pricing", path: "/pricing" },
//     { label: "About Us", path: "/about-us" },
//   ];

//   return (
//     <Navbar
//       bg="light"
//       expand="lg"
//       fixed="top"
//       className="custom-navbar shadow-sm"
//     >
//       <Container fluid className="px-4">
//         <Navbar.Brand
//           as={Link}
//           to="/"
//           className="fw-bold d-flex align-items-center"
//         >
//           <img
//             src="/images/Legal_logo.png"
//             alt="logo"
//             width="30"
//             height="30"
//             className="me-2"
//           />
//           LEGAL DESK AI
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav" className="justify-content-between">
//           <Nav className="mx-auto">
//             {navLinks.map((link, idx) => (
//               <Nav.Link
//                 as={Link}
//                 to={link.path}
//                 key={idx}
//                 className={`nav-link-custom ${
//                   location.pathname === link.path ? "active" : ""
//                 }`}
//               >
//                 {link.label}
//               </Nav.Link>
//             ))}
//           </Nav>

//           <div className="d-flex gap-2">
//             <Button variant="outline-dark" className="rounded-0 px-4 py-1">
//               <Link to="/register">REGISTER</Link>
//             </Button>
//             <Button variant="outline-dark" className="rounded-0 px-4 py-1">
//               <Link to="/login">LOGIN</Link>
//             </Button>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./styles/Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // 🔥 Get first name from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setFirstName(data.firstName || "");
        }
      } else {
        setFirstName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setFirstName("");
    navigate("/login");
  };

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

          <div className="d-flex gap-2 align-items-center">
            {user ? (
              <>
                <span className="fw-bold">{firstName}</span>
                <Button
                  variant="outline-danger"
                  className="rounded-0 px-3 py-1"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline-dark" className="rounded-0 px-4 py-1">
                  <Link to="/register">REGISTER</Link>
                </Button>
                <Button variant="outline-dark" className="rounded-0 px-4 py-1">
                  <Link to="/login">LOGIN</Link>
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
