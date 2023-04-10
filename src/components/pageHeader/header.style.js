import styled, { css } from 'styled-components';

const commonStyles = css`
  color: #fff;
  font-family: Red Rose;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  top: -100px;

  @media screen and (max-width: 1000px) {
    top: -60px;
  }

  @media screen and (max-width: 768px) {
    top: -40px;
  }

  @media screen and (max-width: 500px) {
    top: -30px;
  }

  @media screen and (max-width: 380px) {
    top: -20px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
`;

export const LogoContainer = styled.div`
  position: relative;
  top: -60px;
  ${commonStyles}

  @media screen and (max-width: 500px) {
    top: -50px;
  }

  img {
    width: 120px;

    @media screen and (max-width: 1000px) {
      width: 100px;
    }

    @media screen and (max-width: 768px) {
      width: 80px;
    }

    @media screen and (max-width: 500px) {
      width: 60px;
    }
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-top: 15px;
    line-height: 5px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;
