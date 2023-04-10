import styled from 'styled-components';
import { Accordion, Container } from "react-bootstrap";
import icon from '../../images/accordion-plus.svg';

export const FaqContainer = styled(Container)`
  padding: 80px 150px;

  @media(max-width: 780px){
    padding: 80px 0;
  }
`;

export const AccordionContainer = styled(Accordion)`
  padding: 0 80px;
  font-family: Red Rose;

  @media(max-width: 768px){
    padding: 0 10px;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  margin-bottom: 20px;
  border: none !important;
  background-color: rgba(255, 255, 255, 0.1) !important;

  &:first-of-type {
    border: none !important;
    background: rgba(255, 255, 255, 0.1);
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

    &::after {
      background-image: url(${icon}) !important;
    }
  }

  .accordion-button,
  .accordion-button:not(.collapsed) {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    blend-mode: overlay;
  }

  .accordion-button.collapsed {
    background: rgba(0, 0, 0, 0.1) !important;
  }
`;

export const AccordionBody = styled(Accordion.Body)`
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  color: #fff !important;
`;
