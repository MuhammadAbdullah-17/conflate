import React from "react";
import { Container, Row, Col, Card, Image, Jumbotron } from "react-bootstrap";
import mobileAppImage from "./assets/services1.svg";
import websiteImage from "./assets/mobileservice.png";
import softwareImage from "./assets/softwareservice.png";

function Services() {
  return (
    <Container>
      <div className="text-center mt-5 mb-5">
        <h1 className="display-4">Our Services</h1>
      </div>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-center">
            <Image src={mobileAppImage} alt="Mobile App Development" fluid />
            <Card.Body>
              <Card.Title>Mobile App Development</Card.Title>
              <Card.Text>
                We provide full-cycle mobile app development services, including
                design, development, and deployment. Our team has expertise in
                both iOS and Android platforms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Image src={websiteImage} alt="Website Development" fluid />
            <Card.Body>
              <Card.Title>Website Development</Card.Title>
              <Card.Text>
                We offer custom website development services, from design to
                deployment. Our team uses the latest technologies to create
                engaging, responsive, and user-friendly websites.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Image src={softwareImage} alt="Software Development" fluid />
            <Card.Body>
              <Card.Title>Software Development</Card.Title>
              <Card.Text>
                Our team has expertise in custom software development, including
                desktop and web-based applications. We provide end-to-end
                development services, from requirement gathering to deployment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
