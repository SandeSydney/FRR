import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import frr_logo from "../resources/frr-logo.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-5 bg-[#303e44]"></div>
      <footer>
        <Container>
          <Row className="foot_details">
            <Col xs={12} sm={12} md={3}>
              <img src={frr_logo} alt="Fred's Ranch Logo" />
            </Col>
            <Col xs={6} sm={6} md={3}>
              <h3>Quick Links</h3>
              <p>
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"about-us"}>About Us</Link>
              </p>
              <p>
                <Link to={"dining"}>Dining</Link>
              </p>
              <p>
                <Link to={"events"}>Events</Link>
              </p>
              <p>
                <Link to={"gallery"}>Gallery</Link>
              </p>
              <p>
                <Link>School</Link>
              </p>
              <p>
                <Link>Contact Us</Link>
              </p>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <h3>Address</h3>
              <p>P.O BOX 192,</p>
              <p>Isinya, Namanga Road, </p>
              <p> Kajiado, Kenya.</p>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h3>Get In Touch</h3>
              <p>
                <PhoneAndroidIcon /> &nbsp;
                <a href="tel:+254792564243">+254792564243</a>{" "}
              </p>
              <p>
                <PhoneAndroidIcon /> &nbsp;
                <a href="tel:+254791323785">+254791323785</a>
              </p>
              <p>
                <EmailIcon/> &nbsp;
                <a href="mailto:info@fredsranch.co.ke">info@fredsranch.co.ke</a>
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="h-10 md:content-center">
            <Col xs={12} sm={12} md={4}>
              &copy; 2024 All rights reserved
            </Col>
            <Col xs={12} sm={12} md={4} className="md:text-center">
              Machoka International Group Limited
            </Col>
            <Col xs={12} sm={12} md={4} className="md:text-right">
              Privacy Policy | Terms and Conditions
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
