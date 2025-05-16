// // src/components/IntegrationServices.tsx
// import React from "react";
// import { Container } from "react-bootstrap";

// const IntegrationServices: React.FC = () => (
//   <Container className="my-5">
//     <h1>Integration Services</h1>
//     <p>
//       We offer seamless integration with your existing legal systems, ensuring
//       smooth data flow and enhanced productivity.
//     </p>
//     {/* Add more detailed content here */}
//   </Container>
// );

// export default IntegrationServices;

// src/components/IntegrationServices.tsx
import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./styles/IntegrationServices.css";
// import "../components/styles/IntegrationServices.css";
type IntegrationSection = {
  title: string;
  desc: string;
  features: string[];
  compatible: string[];
};

const integrationSections: IntegrationSection[] = [
  {
    title: "Direct Download",
    desc: "Facilitates users to download files directly from the platform.",
    features: [
      "Secure file transfer",
      "Resume interrupted downloads",
      "Download tracking and analytics",
    ],
    compatible: [
      "HTTP/HTTPS protocols",
      "FTP servers",
      "Content Delivery Networks (CDNs)",
    ],
  },
  {
    title: "API Connectivity",
    desc: "Enables seamless integration with external services through APIs.",
    features: [
      "REST and SOAP support",
      "OAuth 2.0 authentication",
      "Rate limiting and throttling",
    ],
    compatible: ["Third-party APIs", "Internal microservices", "API gateways"],
  },
  {
    title: "SFTP Upload",
    desc: "Allows secure uploading of files using the Secure File Transfer Protocol (SFTP).",
    features: [
      "Secure SSH-based file transfer",
      "File integrity checks",
      "Directory management",
    ],
    compatible: [
      "SFTP servers",
      "Automation scripts",
      "Data integration platforms",
    ],
  },
  {
    title: "Database Connectors",
    desc: "Provides connectivity to various database systems for data operations.",
    features: [
      "CRUD operations",
      "Connection pooling",
      "Transaction management",
    ],
    compatible: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQL Server",
      "NoSQL databases",
    ],
  },
];

const IntegrationServices: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = integrationSections[selectedIndex];

  return (
    <div className="integration-page">
      <div className="integration-hero">
        <h1 className="text-white text-center fw-bold">INTEGRATION SERVICES</h1>
      </div>

      <Container fluid className="py-5 px-4">
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <h5 className="fw-bold mb-3">INTEGRATION TYPES</h5>
            <ListGroup>
              {integrationSections.map((item, idx) => (
                <ListGroup.Item
                  key={item.title}
                  active={idx === selectedIndex}
                  onClick={() => setSelectedIndex(idx)}
                  action
                >
                  {item.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <h3 className="text-primary fw-bold">Integration Services</h3>
            <p className="mt-3">
              LegalDesk AI provides seamless integration services, enabling
              legal professionals to connect our AI-powered solutions with
              existing workflows and third-party platforms. Our integrations
              enhance efficiency by automating data exchange, synchronizing case
              management systems, and streamlining legal operations. With secure
              APIs and customizable configurations, we ensure a smooth,
              compliant, and hassle-free adoption of advanced legal technology.
            </p>

            <h5 className="text-primary fw-bold mt-4">{selected.title}</h5>
            <p className="fw-semibold">{selected.desc}</p>

            <Row>
              <Col md={6}>
                <h6 className="fw-bold">Key Features</h6>
                <ul>
                  {selected.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <h6 className="fw-bold">Compatible With</h6>
                <ul>
                  {selected.compatible.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntegrationServices;
