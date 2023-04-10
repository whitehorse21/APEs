import styled, { css } from 'styled-components';
import { Container } from "react-bootstrap";

export const RoadmapContainer = styled(Container)`
  margin: 40px auto;
  padding: 80px 10px;
  position: relative;
  font-family: Red Rose;
  font-style: normal;
`;

export const RoadmapDivider = styled.img`

  @media screen and (max-width: 768px) {
    margin-left: -75%;
  }

  @media screen and (max-width: 450px) {
    opacity: 0.2;
  }
`;

export const RoadmapContent = styled.div`
  align-items: center;
  color: #FFFFFF;

  .roadMapSubTitle {
    font-weight: bold;
    font-size: 30px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 450px) {
      line-height: 0.5;
    }
  }
  
  .roadMapDescription {
    font-size: 20px;
    font-weight: 300;
  }
  
  .roadMapDescription.right {
    text-align: left;
    width: 73%;

    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  
  .roadMapSubTitle.left {
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  
  .roadMapDescription.left {
    text-align: end;
    margin-left: 30%;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      text-align: start;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 140px;
    text-align: left;
  }

  @media screen and (max-width: 450px) {
    margin-left: 110px;
  }
`;

const phaseCommonStyles = css`
  position: absolute;
  width: 40%;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

const leftPhaseStyles = css`
  left: 3rem;
  @media screen and (max-width: 9000px) {
    left: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    left: 0;
  }

`;

const rightPhaseStyles = css`
  right: 3rem;
  @media screen and (max-width: 9000px) {
    right: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    right: .5rem;
  }
`;

export const Phase1 = styled.div`
  ${phaseCommonStyles}
  top: 180px;
  ${rightPhaseStyles}
`;

export const Phase2 = styled.div`
  ${phaseCommonStyles}
  top: 425px;
  ${leftPhaseStyles}
`;

export const Phase3 = styled.div`
${phaseCommonStyles}
  top: 660px;
  ${rightPhaseStyles}
`;

export const Phase4 = styled.div`
  ${phaseCommonStyles}
  top: 898px;
  ${leftPhaseStyles}
`;

export const Phase5 = styled.div`
  ${phaseCommonStyles}
  top: 1135px;
  ${rightPhaseStyles}
`;

export const Phase6 = styled.div`
  ${phaseCommonStyles}
  top: 1370px;
  ${leftPhaseStyles}
`;