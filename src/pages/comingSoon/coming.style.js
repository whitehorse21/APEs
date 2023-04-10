import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    nav.navbar {
      display: hidden;
      visibility: hidden;
    }

    .pages {
      background: none;
    }
  }
`;

export const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Red Rose;
  color: #fff;

  h1 {
    font-size: 5rem;
    font-weight: 800;

    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-size: 2rem;

    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  .left-img,
  .right-img { 
    width: 350px;
    position: fixed;
    bottom: 0;
    mix-blend-mode: overlay;

    @media screen and (max-width: 768px) {
      opacity: 0.4;
    }

    @media screen and (max-width: 650px) {
      opacity: 0.25;
    }

    @media screen and (max-width: 350px) {
      opacity: 0.15;
    }
  }

  .left-img {
    left: 0;

    @media screen and (max-width: 650px) {
      left: -150px;
    }
  }

  .right-img {
    right: 0;

    @media screen and (max-width: 650px) {
      right: -150px;
    }
  }

`;

export const SocialLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: -1rem;

.social-icon {
  width: 45px;
}
`;