import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import mvaSlide from "../../images/mva-slide.jpg";
import aboutImg from "../../images/home-about-ape.svg";
import ComingSoonImage from "../../assets/images/alpha/coming-soon.png";
import ComingMonkeyImage from "../../assets/images/alpha/coming-monkey.svg"
import alphaRight from "../../images/apes/footer/alpha-right.svg";
import alphaLeft from "../../images/apes/footer/alpha-left.svg";

import MeetApesSlide from "../../components/meetApes";
import Team from "../../components/team";
import { alphaTeam } from "../../data";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import Roadmap from "../../components/roadmap";

import "./home.css";
import { Link } from "react-router-dom";

const ImageWrapper = styled.img`
  width: 100%;
  position: relative;
`;

export const AlphaHome = () => {

  return (
    <>
     <div style={{ marginTop: "-10px", marginBottom: "-10px" }}>
      <ImageWrapper src={mvaSlide} alt="title" />
      </div>
      <Container className="aboutUs">
        <Row>
          <Col xs={12} sm={12} md={6} xl={6}>
            <img src={aboutImg} alt="aboutUs" className="aboutImage" />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
            <div className="aboutTextContent">
              <h4 className="title">About Us</h4>
              <p className="aboutContent">Mad Ⓥ-Apes is an NFT collection comprised of 9,999 mad apes! These apex predators were looking for an environment free of contamination, and they found the best one imaginable here in the VeChain metaverse!</p>
              <p className="aboutContent">The ALPHA Series sale ended on Dec. 2nd and a second collection of 5,000 3D FUSION Series apes was dropped on Feb. 5th</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Roadmap />
      <MeetApesSlide />

      <Container className="tokenomics">
        <h4 className="title">Tokenomics</h4>
        <img src={ComingMonkeyImage} alt="ComingMonkey" className="coming-monkey" />
        <Row className="soon">
          <Link to="/coming-soon">
          <img src={ComingSoonImage} alt="ComingSoon" className="coming-soon" />
          </Link>
        </Row>
      </Container>

      <Team team={alphaTeam} />
      <Faq />
      <Footer rightImg={alphaRight} leftImg={alphaLeft} />
    </>
  );
};
