// // src/components/CatalogServices.tsx
// import React from "react";
// import { Container } from "react-bootstrap";

// const CatalogServices: React.FC = () => (
//   <Container className="my-5">
//     <h1>Catalog Services</h1>
//     <p>
//       Our catalog services provide structured legal data, enabling efficient
//       access to statutes, regulations, and case law.
//     </p>
//     {/* Add more detailed content here */}
//   </Container>
// );

// export default CatalogServices;

// // src/components/CatalogServices.tsx
// import React, { useState } from "react";
// import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./styles/CatalogServices.css";

// // ChartJS registration
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Sample data for each case type
// const caseDataMap: Record<string, number[]> = {
//   Civil: [50, 20, 30],
//   Criminal: [10, 15, 5],
//   Family: [25, 8, 12],
//   "Official Records": [35, 10, 7],
//   Marriage: [5, 2, 1],
//   Traffic: [40, 30, 10],
// };

// const caseTypes = Object.keys(caseDataMap);

// const CatalogServices: React.FC = () => {
//   const [selectedCaseType, setSelectedCaseType] = useState("Civil");

//   const chartData = {
//     labels: ["Previous Cases", "Today's Cases", "Pending Cases"],
//     datasets: [
//       {
//         label: `${selectedCaseType} Case Stats`,
//         data: caseDataMap[selectedCaseType],
//         backgroundColor: "#3b3e45",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom" as const,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="catalog-page">
//       <div className="catalog-hero">
//         <h1 className="text-white text-center fw-bold">CATALOG SERVICES</h1>
//       </div>

//       <Container fluid className="mt-4 px-5">
//         <Row>
//           {/* Sidebar */}
//           <Col md={3} className="bg-light py-4 px-3">
//             <h5 className="fw-bold">CASE TYPES</h5>
//             <ListGroup variant="flush">
//               {caseTypes.map((type) => (
//                 <ListGroup.Item
//                   key={type}
//                   active={selectedCaseType === type}
//                   onClick={() => setSelectedCaseType(type)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {type}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Col>

//           {/* Chart and Text */}
//           <Col md={9} className="py-4">
//             <h3 className="text-primary fw-bold">Catalog Services</h3>
//             <p>
//               LegalDesk AI offers comprehensive catalog services, providing a
//               structured and organized overview of legal solutions tailored for
//               attorneys. Our platform streamlines service offerings, ensuring
//               easy navigation through legal specializations, case types, and
//               procedural guidelines. By enhancing accessibility and clarity, we
//               empower legal professionals to efficiently manage their services,
//               improve client engagement, and maintain compliance with industry
//               standards.
//             </p>

//             <h5 className="text-primary mt-5">{selectedCaseType} Cases</h5>
//             <Bar data={chartData} options={chartOptions} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default CatalogServices;

// src/components/CatalogServices.tsx
import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./styles/CatalogServices.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const caseDataMap: Record<string, number[]> = {
  Civil: [50, 20, 30],
  Criminal: [10, 15, 5],
  Family: [25, 8, 12],
  "Official Records": [35, 10, 7],
  Marriage: [5, 2, 1],
  Traffic: [40, 30, 10],
};

const caseTypes = Object.keys(caseDataMap);

const CatalogServices: React.FC = () => {
  const [selectedCaseType, setSelectedCaseType] = useState("Civil");

  const chartData = {
    labels: ["Previous Cases", "Today's Cases", "Pending Cases"],
    datasets: [
      {
        label: `${selectedCaseType} Case Stats`,
        data: caseDataMap[selectedCaseType],
        backgroundColor: "#3b3e45",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="catalog-page">
      <div className="catalog-hero">
        <h1 className="text-white text-center fw-bold">CATALOG SERVICES</h1>
      </div>

      <Container fluid className="mt-4 px-5">
        <Row>
          {/* Sidebar */}
          <Col md={3} className="case-types-sidebar">
            <h5 className="case-types-title">CASE TYPES</h5>
            <ListGroup className="case-types-list">
              {caseTypes.map((type) => (
                <ListGroup.Item
                  key={type}
                  active={selectedCaseType === type}
                  onClick={() => setSelectedCaseType(type)}
                >
                  {type}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9} className="py-4">
            <h3 className="text-primary fw-bold">Catalog Services</h3>
            <p>
              LegalDesk AI offers comprehensive catalog services, providing a
              structured and organized overview of legal solutions tailored for
              attorneys. Our platform streamlines service offerings, ensuring
              easy navigation through legal specializations, case types, and
              procedural guidelines. By enhancing accessibility and clarity, we
              empower legal professionals to efficiently manage their services,
              improve client engagement, and maintain compliance with industry
              standards.
            </p>

            <h5 className="text-primary mt-5">{selectedCaseType} Cases</h5>
            <Bar data={chartData} options={chartOptions} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CatalogServices;
