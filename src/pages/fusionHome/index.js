
import { Accordion, Col, Row } from 'react-bootstrap';

import fusionHeader from '../../images/fusion-header.jpeg';
import ape1 from '../../images/about/ape01.svg';
import ape2 from '../../images/about/ape02.svg';
import ape3 from '../../images/about/ape03.svg';
import ape4 from '../../images/about/ape04.svg';

import gal1 from '../../images/gallery/gal01.svg';
import gal2 from '../../images/gallery/gal02.svg';
import gal3 from '../../images/gallery/gal03.svg';
import gal4 from '../../images/gallery/gal04.svg';
import gal5 from '../../images/gallery/gal05.svg';
import gal6 from '../../images/gallery/gal06.svg';
import leftImg from '../../images/home-left-side.svg';
import rightImg from '../../images/home-right-side.svg'
import faqImg from '../../images/roadmap-side.png'
import gallerySideImg from '../../images/gallery-side.png';

import { HomeHeader, AboutContainer, ContentContainer,
  AccordionItem, AccordionHeader, AccordionContainer } from './home.style';

import Roadmap from "../../components/roadmap";
import Team from '../../components/team';
import Footer from '../../components/footer';

import { fusionTeam, faqQuestions } from '../../data';


const FusionHome = () => {
  return (
    <>
      <HomeHeader>
        <img className="w-100 position-relative" src={fusionHeader} alt="fusion home" />
      </HomeHeader>

      <ContentContainer>
        <AboutContainer>
        <Row className='d-flex align-items-center'>
          <Col sm={12} md={6}>
            <Row className='about-img-gal'>
              <Col sm={6}><img src={ape1} alt="ape" className="ape-img py-1 w-100" /></Col>
              <Col sm={6}><img src={ape2} alt="ape" className="ape-img py-1 w-100" /></Col>
              <Col sm={6}><img src={ape3} alt="ape" className="ape-img py-1 w-100" /></Col>
              <Col sm={6}><img src={ape4} alt="ape" className="ape-img py-1 w-100" /></Col>
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <div className="about-text d-flex flex-column align-items-center">
              <h4 className="title">Join The MAD ⓥ-APES</h4>
              <h4 className="title project-title">About Project</h4>
              <div className="about-content">
                <p>
                5,000 new, 3D-style, mad apes. The first NFT collection of its kind within the VNFT space, FUSION Series is the second collection to come out of the Mad Ⓥ-Apes project. 
                </p>
                <p>
                The Fusion Collection was made to reward our Mad Ⓥ-Apes holders, they needed to have Three Alpha Apes to get one Free Fusion Ape. 1850 Apes were airdropped to our holders, 3100 for Pre-sale /Public Sale and 50 kept by the Team for Giveaways, Contests and Collaborations. 
                </p>
              </div>
            </div>
          </Col>
        </Row>
        </AboutContainer>
        <div className='roadmap'>
          <Roadmap />
        </div>
        <div className="home-gallery position-relative">
          <img src={gallerySideImg} alt="side ape" className="gallery-side-img" />
          <h4 className="title">Gallery</h4>
          <Row className='p-5'>
            <Col sm={12} md={4}>
              <img src={gal1} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
            <Col sm={12} md={4}>
              <img src={gal2} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
            <Col sm={12} md={4}>
              <img src={gal3} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
            <Col sm={12} md={4}>
              <img src={gal4} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
            <Col sm={12} md={4}>
              <img src={gal5} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
            <Col sm={12} md={4}>
              <img src={gal6} alt="mad ape" className="gal-img py-2 w-100" />
            </Col> 
          </Row>
        </div>

        <div className="home-team">
        <Team team={fusionTeam} />
        </div>


        <div className='faq-section position-relative'>
          <img src={faqImg} alt="faq" className="faq-img" />
          <h4 className="title">FAQ</h4>
          <AccordionContainer>
            { faqQuestions.map((question, index) => (
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
  )
}

export default FusionHome;