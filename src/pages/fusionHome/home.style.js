import { Accordion, Container } from "react-bootstrap";
import styled from "styled-components";

export const HomeHeader = styled.div`
  margin-top: -4rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 992px) {
    margin-top: -3rem;
  }

  @media screen and (max-width: 700px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: -1.5rem;
  }
`;

export const ContentContainer = styled(Container)`

.ape-img, .gal-img {
  width: 100%;
  transition: all 0.4s ease-in-out;
}

.gal-img,
.ape-img {
  &:hover {
    transform: scale(1.05) translateY(-5px);
  }
}

.faq-img {
  width: 25rem;
  position: absolute;
  right: -5rem;
  bottom: 5.5rem;

  @media screen and (max-width: 992px) {
    opacity: 0.4;
  }

}

.home-team {
  padding: 6rem;

  @media screen and (max-width: 992px) {
    padding: 0;
  }

  .team-position span {
    @media screen and (max-width: 992px) {
      line-height: 1.1;
    }
  }
}

.gallery-side-img {
  position: absolute;
  right: -120px !important;
  bottom: 7rem;
}

.home-gallery {
  padding: 3rem;

  @media screen and (max-width: 992px) {
    padding: 0;
  }
}

.faq-section {
  padding: 3rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
}

`;

export const AboutContainer = styled.div`

  padding: 8rem 4rem;

  @media screen and (max-width: 992px) {
    padding: 4rem 0;
  }

  .about-img-gal {
    @media screen and (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .about-text {
    position: relative;
    padding-left: 2rem;

    .title {
      font-size: 2.75rem;

      @media screen and (max-width: 992px) {
        font-size: 2.5rem;
        line-height: 1.1;
      }
    }

    .project-title {
      position: absolute;
      transform: rotate(-90deg);
      transform-origin: left top;
      font-size: 2.6rem;
      left: 0;
      color: #222;
      bottom: -1.8rem;

      @media screen and (max-width: 992px) {
        left: -1rem;
      }
    }
  }

  .about-content {
    color: #fff;
    font-size: 1.2rem;
    width: 80%;
    text-align: justify;

    @media screen and (max-width: 992px) {
      width: 95%;
    }
    
  }
`;

export const AccordionContainer = styled(Accordion)`
  padding: 0 80px;
  font-family: Red Rose;
  width: 75%;

  @media(max-width: 992px){
    padding: 0 10px;

    width: 100%;
  }

  @media(max-width: 768px){
    padding: 0 10px;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  margin-bottom: 10px;
  border: none !important;
  background-color: transparent !important;
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  font-weight: 300;

  &:first-of-type {
    border: none !important;
    background: transparent;
  }
`;

export const AccordionHeader = styled(Accordion.Header)`

  .accordion-button {
    font-size: 24px;
    color: #fff !important;

    &:focus {
      z-index: 3;
      border-color: black !important;
      outline: 0;
      box-shadow: none !important;
    }
  }

  .accordion-button,
  .accordion-button:not(.collapsed) {
    color: #fff !important;
    background-color: transparent !important;
    blend-mode: overlay;
  }

  .accordion-button.collapsed {
    background: rgba(0, 0, 0, 0.1) !important;
  }
`;