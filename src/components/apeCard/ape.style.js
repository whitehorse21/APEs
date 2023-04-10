import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CardContainer = styled(Card)`
  width: 100%;
  background-color: rgba(36, 36, 36, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: .8rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border: 1px solid rgba(255, 255, 255, 0.17);
    transform: translateY(-5px) scale(1.02);
  }

  .card-body {
    border-left: 1px solid rgba(255, 255, 255, 0.17);
    border-right: 1px solid rgba(255, 255, 255, 0.17);
    margin-top: -2px;
  }
`;