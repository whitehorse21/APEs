import { Accordion, Col, Row } from "react-bootstrap";

import fusionHeader from "../../images/fusion-header.jpeg";
import leftImg from "../../images/home-left-side.svg";
import rightImg from "../../images/home-right-side.svg";
import faqImg from "../../images/roadmap-side.png";
import gallerySideImg from "../../images/gallery-side.png";

import {
  HomeHeader,
  AboutContainer,
  ContentContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContainer,
} from "./home.style";

import Roadmap from "../../components/roadmap";
import Team from "../../components/team";
import Footer from "../../components/footer";

import { fusionTeam, faqQuestions } from "../../data";
import { apes, galleries } from "../../data";

const FusionHome = () => {
  return (
    <>
      <HomeHeader>
        <img
          className="w-100 position-relative"
          src={fusionHeader}
          alt="fusion home"
        />
      </HomeHeader>

      <ContentContainer>
        <AboutContainer>
          <Row className="d-flex align-items-center">
            <Col sm={12} md={6}>
              <Row className="about-img-gal">
                {apes.map((eachApe) => (
                  <Col sm={6}>
                    <img
                      src={eachApe}
                      alt="ape"
                      className="ape-img py-1 w-100"
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={12} md={6}>
              <div className="about-text d-flex flex-column align-items-center">
                <h4 className="title">Join The MAD ⓥ-APES</h4>
                <h4 className="title project-title">About Project</h4>
                <div className="about-content">
                  <p>
                    5,000 new, 3D-style, mad apes. The first NFT collection of
                    its kind within the VNFT space, FUSION Series is the second
                    collection to come out of the Mad Ⓥ-Apes project.
                  </p>
                  <p>
                    The Fusion Collection was made to reward our Mad Ⓥ-Apes
                    holders, they needed to have Three Alpha Apes to get one
                    Free Fusion Ape. 1850 Apes were airdropped to our holders,
                    3100 for Pre-sale /Public Sale and 50 kept by the Team for
                    Giveaways, Contests and Collaborations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </AboutContainer>
        <div className="roadmap">
          <Roadmap />
        </div>
        <div className="home-gallery position-relative">
          <img
            src={gallerySideImg}
            alt="side ape"
            className="gallery-side-img"
          />
          <h4 className="title">Gallery</h4>
          <Row className="p-5">
            {galleries.map((eachGallery) => (
              <Col sm={12} md={4}>
                <img
                  src={eachGallery}
                  alt="mad ape"
                  className="gal-img py-2 w-100"
                />
              </Col>
            ))}
          </Row>
        </div>

        <div className="home-team">
          <Team team={fusionTeam} />
        </div>

        <div className="faq-section position-relative">
          <img src={faqImg} alt="faq" className="faq-img" />
          <h4 className="title">FAQ</h4>
          <AccordionContainer>
            {faqQuestions.map((question, index) => (
              <AccordionItem key={index} eventKey={index}>
                <AccordionHeader>{question.question}</AccordionHeader>
                <Accordion.Body>{question.answer}</Accordion.Body>
              </AccordionItem>
            ))}
          </AccordionContainer>
        </div>
      </ContentContainer>
      <Footer rightImg={rightImg} leftImg={leftImg} />
    </>
  );
};

export default FusionHome;
