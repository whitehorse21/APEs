import styled from 'styled-components';
import { Container } from "react-bootstrap";

export const FooterContainer = styled(Container)`
  padding: 20px 200px;
  font-family: Red Rose;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }

  .hrule {
    width: 100%;
    border-top: 1px solid #e6e6e6;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .social-icon {
    width: 40px;
  }
`;

export const FooterCopyRight = styled.div`
  font-size: 20px;
  color: #8c8c8c;
  text-align: center;
  margin-top: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const FooterSideImg = styled.div`
  .left-footer-img,
  .right-footer-img  {
    position: absolute;
    bottom: 0;
    mix-blend-mode: difference;

    @media screen and (max-width: 768px) {
      opacity: 0.1;
    }
  }

  .left-footer-img {
    left: 0;
  }

  .right-footer-img {
    right: 0;


    @media screen and (max-width: 450px) {
      opacity: 0;
    }
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  li {
    padding: 0 10px;
    list-style: none;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
