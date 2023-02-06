import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import softwareImage from "./assets/AboutImg.avif";
function About() {
  return (
    <Container>
    <div className="text-center mt-5 mb-5">
        <h1 className="display-4">About Us</h1>
      </div>
      <Row className="justify-content-center mt-5 mb-5">
        <Col md={8}>
          <p className="text-justify lead">
            We are a team of hardworking individuals dedicated to delivering high-quality software solutions. 
            Our passion for technology and commitment to our clients sets us apart in the industry. 
            We believe in the power of collaboration and strive to create a positive and supportive work environment.
          </p>
        </Col>
        <Col md={4}>
          <Image src={softwareImage} alt="Software Development" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
