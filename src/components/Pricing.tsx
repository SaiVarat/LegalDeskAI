// // src/components/Pricing.tsx
// import React from "react";
// import { Container, Card, Row, Col, Button } from "react-bootstrap";

// const Pricing: React.FC = () => (
//   <Container className="my-5">
//     <h1>Pricing</h1>
//     <Row>
//       <Col md={4}>
//         <Card className="mb-4">
//           <Card.Body>
//             <Card.Title>Basic</Card.Title>
//             <Card.Text>
//               <strong>$99/month</strong>
//               <br />
//               Ideal for small legal teams.
//             </Card.Text>
//             <Button variant="primary">Choose Plan</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card className="mb-4">
//           <Card.Body>
//             <Card.Title>Professional</Card.Title>
//             <Card.Text>
//               <strong>$199/month</strong>
//               <br />
//               Suitable for medium-sized firms.
//             </Card.Text>
//             <Button variant="primary">Choose Plan</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card className="mb-4">
//           <Card.Body>
//             <Card.Title>Enterprise</Card.Title>
//             <Card.Text>
//               <strong>Contact Us</strong>
//               <br />
//               Customized solutions for large organizations.
//             </Card.Text>
//             <Button variant="primary">Contact Sales</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// );

// export default Pricing;

// src/components/Pricing.tsx
import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./styles/Pricing.css";

type PlanType = "Basic" | "Professional" | "Enterprise";

const plans: Record<
  PlanType,
  {
    price: string;
    subtitle: string;
    features: string[];
  }
> = {
  Basic: {
    price: "$99/mo",
    subtitle: "Ideal for Small Firms",
    features: [
      "✓ 5 Case Analyses",
      "✓ 3 User Accounts",
      "✓ Basic Support",
      "✓ 100 Document Storage",
    ],
  },
  Professional: {
    price: "$299/mo",
    subtitle: "Ideal for Medium Firms",
    features: [
      "✓ 20 Case Analyses",
      "✓ 10 User Accounts",
      "✓ Priority Support",
      "✓ 500 Document Storage",
    ],
  },
  Enterprise: {
    price: "Custom",
    subtitle: "Ideal for Large Organizations",
    features: [
      "✓ Unlimited Analyses",
      "✓ Unlimited Users",
      "✓ 24/7 Support",
      "✓ Advanced Analytics",
    ],
  },
};

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Basic");
  const plan = plans[selectedPlan];

  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <h1 className="text-white text-center fw-bold">PRICING</h1>
      </div>

      <Container fluid className="py-5 px-4">
        <Row>
          {/* Sidebar */}
          <Col md={3} className="plan-types-sidebar">
            <h5 className="plan-types-title">PLAN TYPES</h5>
            <ListGroup className="plan-types-list">
              {Object.keys(plans).map((planKey) => (
                <ListGroup.Item
                  key={planKey}
                  active={selectedPlan === planKey}
                  onClick={() => setSelectedPlan(planKey as PlanType)}
                  action
                >
                  {planKey}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <h3 className="text-primary fw-bold">Pricing</h3>
            <p>
              LegalDesk AI offers flexible and transparent pricing plans
              tailored to the needs of legal professionals. Whether you're an
              independent attorney or a large law firm, our pricing models
              ensure cost-effective access to AI-powered legal solutions. With
              scalable options, subscription-based plans, and custom enterprise
              solutions, we provide the right balance of affordability and
              advanced functionality to optimize your legal operations.
            </p>

            <h5 className="text-primary fw-bold mt-4">{selectedPlan} Plan</h5>

            {/* Cards with equal height */}
            <div className="pricing-card-container mt-4">
              <Card className="text-center shadow-sm pricing-card">
                <Card.Body>
                  <h4 className="fw-bold">{plan.price}</h4>
                  <div className="text-muted">{plan.subtitle}</div>
                </Card.Body>
              </Card>

              <Card className="shadow-sm pricing-card">
                <Card.Body>
                  <h6 className="fw-bold">Key Features</h6>
                  <ul>
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
