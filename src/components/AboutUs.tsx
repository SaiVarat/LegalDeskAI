// // src/components/AboutUs.tsx
// import React from "react";
// import { Container } from "react-bootstrap";

// const AboutUs: React.FC = () => (
//   <Container className="my-5">
//     <h1>About Us</h1>
//     <p>
//       LegalDesk AI is dedicated to transforming the legal industry through
//       innovative AI solutions, enhancing efficiency and accuracy in legal
//       processes.
//     </p>
//     {/* Add more detailed content here */}
//   </Container>
// );

// export default AboutUs;

// src/components/AboutUs.tsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./styles/AboutUs.css";

const AboutUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted!");
    // Optionally reset
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="text-white text-center fw-bold">ABOUT US</h1>
      </div>

      <Container className="text-center py-5">
        <h4 className="fw-bold text-primary">About Us</h4>
        <Row className="justify-content-center my-4">
          <Col md={2}>
            <img
              src="/images/img1.jpeg"
              alt="team-1"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <Col md={2}>
            <img
              src="/images/img2.jpeg"
              alt="team-2"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>

        <h5 className="text-primary fw-semibold">
          We provide expert legal data analysis and AI-driven insights for
          attorneys and law firms.
        </h5>

        {/* Contact Form */}
        <Card className="form-card mx-auto mt-5">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                className="mb-3"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                className="mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="mb-3"
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                className="mb-3"
                value={formData.subject}
                onChange={handleChange}
              />
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Your Message"
                className="mb-3"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit Now
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AboutUs;
