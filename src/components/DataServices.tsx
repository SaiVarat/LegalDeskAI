// // src/components/DataServices.tsx
// import React from "react";
// import { Container } from "react-bootstrap";

// const DataServices: React.FC = () => (
//   <Container className="my-5">
//     <h1>Data Services</h1>
//     <p>
//       Our AI-powered data services optimize legal research, contract analysis,
//       and case management with precision and efficiency.
//     </p>
//     {/* Add more detailed content here */}
//   </Container>
// );

// export default DataServices;

// src/components/DataServices.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/DataServices.css";

const DataServices: React.FC = () => {
  return (
    <div className="data-services-section">
      <div className="overlay">
        <Container className="text-center text-white content">
          <h1>Data Services</h1>
          <p className="subtitle mt-3">
            LegalDesk AI delivers AI-powered data solutions, optimizing legal
            research, contract analysis, and case management with precision and
            efficiency.
          </p>

          <Row className="mt-5">
            <Col md={4}>
              <div className="stat-box">
                <div className="stat-value">1500+</div>
                <div className="stat-label">Florida Cases Analyzed</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-box">
                <div className="stat-value">1200+</div>
                <div className="stat-label">Texas Cases Processed</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-box">
                <div className="stat-value">900+</div>
                <div className="stat-label">Colorado Legal Insights</div>
              </div>
            </Col>
          </Row>

          <Button variant="light" className="mt-4 px-4 py-2">
            Data Services
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default DataServices;
