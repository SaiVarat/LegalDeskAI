// // src/components/Home.tsx
// import React from "react";
// import { Carousel, Button } from "react-bootstrap";
// import "./Home.css"; // Custom styles for overlay

// const Home: React.FC = () => {
//   const slides = [
//     {
//       image: "/images/img1.jpeg",
//       title: "Automate Legal Workflows",
//       buttonText: "Get Started",
//       buttonLink: "/data-services",
//     },
//     {
//       image: "/images/img2.jpeg",
//       title: "Generate Legal Documents Instantly",
//       buttonText: "Explore Catalog",
//       buttonLink: "/catalog-services",
//     },
//     {
//       image: "/images/img3.jpeg",
//       title: "Integrate AI with Your System",
//       buttonText: "View Integrations",
//       buttonLink: "/integration-services",
//     },
//   ];

//   return (
//     <div>
//       {/* <Carousel fade interval={5000}>
//         {slides.map((slide, idx) => (
//           <Carousel.Item key={idx}>
//             <img
//               className="d-block w-100"
//               src={slide.image}
//               alt={`Slide ${idx}`}
//               style={{ height: "500px", objectFit: "cover" }}
//               // style={{ width: "100%", height: "100%", objectFit: "contain" }}
//             />
//             <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 px-5">
//               <h1 className="text-white">{slide.title}</h1>
//               <Button
//                 variant="primary"
//                 href={slide.buttonLink}
//                 className="mt-3"
//               >
//                 {slide.buttonText}
//               </Button>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel> */}

//       <Carousel
//         fade
//         interval={3000}
//         controls={false}
//         indicators={true}
//         pause={false}
//       >
//         {slides.map((slide, idx) => (
//           <Carousel.Item key={idx}>
//             <img
//               className="d-block w-100"
//               src={slide.image}
//               alt={`Slide ${idx}`}
//               style={{ height: "500px", objectFit: "cover" }}
//             />
//             <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 px-5">
//               <h1 className="text-white">{slide.title}</h1>
//               <Button
//                 variant="primary"
//                 href={slide.buttonLink}
//                 className="mt-3"
//               >
//                 {slide.buttonText}
//               </Button>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import "./styles/Home.css";

const slides = [
  {
    image: "/images/img1.jpeg",
    title: "LEGALDESK AI",
    subtitle:
      "LegalDesk.AI, an industry leader in transforming legal data into strategic insights, empowers attorneys to connect with clients effectively just in time.",
    buttonText: "Explore",
    buttonLink: "/data-services",
    styleClass: "slide-hero",
  },
  {
    image: "/images/img2.jpeg",
    title: "Data Services",
    subtitle:
      "LegalDesk AI delivers AI-powered data solutions, optimizing legal research, contract analysis, and case management with precision and efficiency.",
    stats: [
      { value: "1500+", label: "Florida Cases Analyzed" },
      { value: "1200+", label: "Texas Cases Processed" },
      { value: "900+", label: "Colorado Legal Insights" },
    ],
    buttonText: "Data Services",
    buttonLink: "/data-services",
    styleClass: "slide-data",
  },
  {
    image: "/images/img3.jpeg",
    title: "Catalog Services",
    subtitle:
      "LegalDesk AI provides a structured catalog of legal solutions, streamlining service navigation, client engagement, and compliance for attorneys.",
    stats: [
      { value: "10+", label: "Legal Practice Areas Covered" },
      { value: "500+", label: "Pre-Built Legal Templates" },
      { value: "24/7", label: "Access to Legal Resources" },
    ],
    buttonText: "Catalog Services",
    buttonLink: "/catalog-services",
    styleClass: "slide-catalog",
  },
  {
    image: "/images/img1.jpeg",
    title: "Integration Services",
    subtitle:
      "LegalDesk AI integrates seamlessly, automating workflows with secure and customizable solutions.",
    stats: [
      { value: "99%", label: "System Compatibility" },
      { value: "50+", label: "Supported Legal Platforms" },
      { value: "1-Click", label: "Easy API Integration" },
    ],
    buttonText: "Integration Services",
    buttonLink: "/integration-services",
    styleClass: "slide-integration",
  },
  {
    image: "/images/img2.jpeg",
    title: "Pricing",
    subtitle:
      "LegalDesk AI offers flexible, transparent pricing with scalable plans, ensuring cost-effective access to AI-powered legal solutions.",
    stats: [
      { value: "$99", label: "Basic Plan (Per Month)" },
      { value: "$299", label: "Professional Plan (Per Month)" },
      { value: "Custom", label: "Enterprise Solutions" },
    ],
    buttonText: "Pricing",
    buttonLink: "/pricing",
    styleClass: "slide-pricing",
  },
];

const Home: React.FC = () => {
  return (
    <Carousel fade interval={5000} controls={false} indicators pause={false}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 carousel-img"
            src={slide.image}
            alt={`slide-${idx}`}
          />
          <div className={`carousel-caption-custom ${slide.styleClass}`}>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            {slide.stats && (
              <Row className="stat-box-row mt-3">
                {slide.stats.map((stat, i) => (
                  <Col md={4} key={i}>
                    <div className="stat-box">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            {/* <Button className="mt-4 btn btn-primary" href={slide.buttonLink}>
              {slide.buttonText}
            </Button> */}

            <div className="d-inline-block mt-4">
              <Button href={slide.buttonLink}>{slide.buttonText}</Button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;
