import styled, { css } from 'styled-components';
import { Container } from "react-bootstrap";

const commonStyles = css`
  color: #fff;
  font-family: Red Rose;
`;

export const ContainerElement = styled(Container)`
  ${commonStyles}
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  
  padding: 10px;
  font-size: 1.1rem;

  @media screen and (max-width: 500px) {
    font-size: .75rem;
  }

  .description {
    font-weight: 300;
    margin-top: 50px;
    max-width: 500px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  margin: 0 auto;
  max-height: 60px; 
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: .3rem 1rem;
  color: #000;
  line-height: 20px;
  height: 100%;

  @media screen and (max-width: 500px) {
    padding: .1rem .5rem;
  }

  &:last-child, 
  &:first-child {
    background: #FF4200;
    color: white;
    height: 60px;
    
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    border-right: 1px solid #ccc;
    height: 50%;
  }

  .price {
    font-weight: 800;
  }

  .item-name {
    font-weight: 300;
  }

  .alpha {
    font-size: 1.1rem;
    font-weight: 800;

    @media screen and (max-width: 900px) {
      font-size: .8rem;
    }
  }
`;