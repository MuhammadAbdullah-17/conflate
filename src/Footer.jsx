import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/conflate_logo2.png";
function Footer() {
  return (
    <footer className="bg-dark py-4">
      <Container>
      <Image
          src={logo}
          className="d-inline-block mx-auto align-top mb-3"
          alt="Logo"
          height={140}
          width={140}
          fluid
        />
        <Row>
          <Col md={6} className="text-white text-center">
            <p>Office No. 401 Al-Qadir Heights Garden Town Lahore</p>
            <p>Copyright &copy; {new Date().getFullYear()} Software House</p>
          </Col>
          <Col md={6} className="text-white text-center">
            <p className="lead">
              Thank you for visiting our website. We hope you have learned more about our services and the quality of work we can provide. If you have any questions or would like to work with us, don't hesitate to reach out.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
