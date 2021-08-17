import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container className="container">
      <Row>
        <Col md="4" Style="margin: 5px 15px; width: 30%">
          <h1>Computer Science Society</h1>
          <p Style="text-align: center">AMU Aligarh</p>
          <br />
          <p Style="text-align: center">
            Made with ❤️ by <a href="">Web-Team</a>
          </p>
          <p Style="text-align: center">© {year} CSS. All rights reserved.</p>
        </Col>

        <Col md="4" Style="margin: 5px 15px; width: 30%">
          <h1>CONTACT US</h1>
          <hr />
          <p>
            <RoomIcon fontSize="small" />: Department of Computer Science,
            <br /> Aligarh Muslim University,
            <br /> Aligarh, Uttar Pradesh
            <br />
            Aligarh: 202001
          </p>
          <p>
            <PhoneIcon fontSize="small" />: 0091--9045619755 (Prof. Aasim Zafar)
          </p>
          <p>
            <MailIcon fontSize="small" />:
            <a href="mailto:css.cs@amu.ac.in"> css.cs@amu.ac.in</a>
          </p>
          <div>
            <span>
              <TwitterIcon fontSize="large" />
            </span>
            <span>
              <FacebookIcon fontSize="large" />
            </span>
            <span>
              <InstagramIcon fontSize="large" />
            </span>
            <span>
              <YouTubeIcon fontSize="large" />
            </span>
            <span>
              <LinkedInIcon fontSize="large" />
            </span>
          </div>
        </Col>

        <Col md="4" Style="margin: 5px 15px; width: 30%">
          <h1>USEFUL LINKS</h1>
          <hr />
          <p>
            <ArrowForwardIosIcon fontSize="small" />
            <a href> Home</a>
          </p>
          <p>
            <ArrowForwardIosIcon fontSize="small" />
            <a href> About</a>
          </p>
          <p>
            <ArrowForwardIosIcon fontSize="small" />
            <a href> Education</a>
          </p>
          <p>
            <ArrowForwardIosIcon fontSize="small" />
            <a href> Research</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
