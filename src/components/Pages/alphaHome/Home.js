import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import TitleImage from "../../../assets/images/alpha/title.svg";
import AboutUsImage from "../../../assets/images/alpha/about.svg";
import LineImage from "../../../assets/images/roadMapLine.svg";
import RoadMapLeftMonkey from "../../../assets/images/alpha/roadMap-left-monkey.svg";
import RoadMapRightMonkey from "../../../assets/images/alpha/roadMap-right-monkey.svg";
import Slider1 from "../../../assets/images/alpha/slider1.svg";
import Slider2 from "../../../assets/images/alpha/slider2.svg";
import Slider3 from "../../../assets/images/alpha/slider3.svg";
import ComingSoonImage from "../../../assets/images/alpha/coming-soon.png";
import ComingMonkeyImage from "../../../assets/images/alpha/coming-monkey.svg"

const ImageWrapper = styled.img`
  width: 100%;
  position: relative;
`;

export const AlphaHome = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div style={{ marginTop: "-1px" }}>
      <ImageWrapper src={TitleImage} alt="title" />
      <div className="about-gradient" />
      <Container className="aboutUs">
        <div className="aboutGradient" />
        <Row>
          <Col xs={12} sm={12} md={6} xl={6}>
            <img src={AboutUsImage} alt="aboutUs" className="aboutImage" />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
            <div className="aboutTextContent">
              <p className="title">About Us</p>
              <p className="aboutContent">Mad Ⓥ-Apes is an NFT collection comprised of 9,999 mad apes! These apex predators were looking for an environment free of contamination, and they found the best one imaginable here in the VeChain metaverse!</p>
              <p className="aboutContent">The ALPHA Series sale ended on Dec. 2nd and a second collection of 5,000 3D FUSION Series apes was dropped on Feb. 5th</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="roadMap">
        <Row>
          <p className="title">Roadmap</p>
        </Row>
        <img src={RoadMapLeftMonkey} alt="leftMonkey" className="roadMapLeftMonkey" />
        <div className="roadMap-gradient1" />
        <img src={RoadMapRightMonkey} alt="leftMonkey" className="roadMapRightMonkey" />
        <div className="roadMap-gradient2" />
        <Row className="desktopView">
          <Col xs={12} sm={12} md={5} xl={5} className="roadMapLeftContent">
            <div className="phase2">
              <p className="roadMapSubTitle left">Phase 2</p>
              <p className="roadMapDescription left">Release the Fusion Apes</p>
            </div>
            <div className="phase4">
              <p className="roadMapSubTitle left">Phase 4</p>
              <p className="roadMapDescription left">Tokenomics & Ape-World</p>
            </div>
            <div className="phase6">
              <p className="roadMapSubTitle left">Phase 6</p>
              <p className="roadMapDescription left">Fusion Females? Fusion Mutants? It´s a surprise.</p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={2} xl={2}>
            <img src={LineImage} alt="roadMapLine" className="lineImage" />
          </Col>
          <Col xs={12} sm={12} md={5} xl={5} className="roadMapRightContent">
            <div className="phase1">
              <p className="roadMapSubTitle right">Phase 1</p>
              <p className="roadMapDescription right">Release the Alpha Apes, Marketing, Giveaways, Contests, events for the Community</p>
            </div>
            <div className="phase3">
              <p className="roadMapSubTitle right">Phase 3</p>
              <p className="roadMapDescription right">Airdrop Elementals Apes (Females) Merch Designs, Marketing, Web3</p>
            </div>
            <div className="phase5">
              <p className="roadMapSubTitle right">Phase 5</p>
              <p className="roadMapDescription right">We open The Lab for Breeding. </p>
            </div>
          </Col>
        </Row>
        <Row className="mobileView">
          <Col xs={12} sm={12} className="roadMapMobile">
            <div className="phase">
              <p className="roadMapSubTitle">Phase 1</p>
              <p className="roadMapDescription">Release the Alpha Apes, Marketing, Giveaways, Contests, events for the Community</p>
            </div>
            <div className="phase">
              <p className="roadMapSubTitle">Phase 2</p>
              <p className="roadMapDescription">Release the Fusion Apes</p>
            </div>
            <div className="phase">
              <p className="roadMapSubTitle">Phase 3</p>
              <p className="roadMapDescription">Airdrop Elementals Apes (Females) Merch Designs, Marketing, Web3</p>
            </div>
            <div className="phase">
              <p className="roadMapSubTitle">Phase 4</p>
              <p className="roadMapDescription">Tokenomics & Ape-World</p>
            </div>
            <div className="phase">
              <p className="roadMapSubTitle">Phase 5</p>
              <p className="roadMapDescription">We open The Lab for Breeding. </p>
            </div>
            <div className="phase">
              <p className="roadMapSubTitle">Phase 6</p>
              <p className="roadMapDescription">Fusion Females? Fusion Mutants? It´s a surprise.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="apes">
        <p className="title">Meet our Apes</p>
        <div className="apes-slider">
          <Slider {...settings}>
            <img src={Slider1} className="slider-image" alt="slider1" />
            <img src={Slider2} className="slider-image" alt="slider2" />
            <img src={Slider3} className="slider-image" alt="slider3" />
            <img src={Slider1} className="slider-image" alt="slider1" />
            <img src={Slider2} className="slider-image" alt="slider2" />
            <img src={Slider3} className="slider-image" alt="slider3" />
          </Slider>
        </div>
      </Container>
      <Container className="tokenomics">
        <p className="title">Tokenomics</p>
        <img src={ComingMonkeyImage} alt="ComingMonkey" className="coming-monkey" />
        <Row className="soon">
          <img src={ComingSoonImage} alt="ComingSoon" className="coming-soon" />
        </Row>
      </Container>
      <Container className="team"></Container>
    </div>
  );
};
