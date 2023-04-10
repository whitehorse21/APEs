import styled, { createGlobalStyle, css } from 'styled-components';
import bg from '../../images/construction-bg.jpeg';
import bar from '../../images/construction-bar.svg';

export const GlobalStyle = createGlobalStyle`

  body {
    background: url(${bg}) no-repeat center center fixed;

    nav.navbar {
      display: hidden;
      visibility: hidden;
    }

    .pages {
      background: none;
    }
  }
`;

export const Bar = css`
  display: block; 
  width: 100vw;
  height: 3.2rem;
  position: fixed;
  left: 0;
`;

export const ConstructionBar = styled.div`
  ${Bar}
  background: url(${bar}) 0 0 fixed;
  top: 0;
`;

export const ConstructionBarBtm = styled.div`
  ${Bar}
  background: url(${bar}) bottom left fixed;
  bottom: 0;
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


export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  font-family: Red Rose;

   .under {
     padding: 1rem 1.5rem;
     background: #F8C62B;
     display: flex;
     justify-content: center;
     margin: auto;

     h1 {
        font-size: 9rem;
        font-weight: 800;
        color: 1c1c1c;
        letter-spacing: -0.85rem;
        transform: scaleY(1.5);
        text-align: center;
        align-self: center;

        @media screen and (max-width: 700px) {
          font-size: 9rem;
        }

        @media screen and (max-width: 500px) {
          font-size: 8rem;
          letter-spacing: -0.7rem;
        }

        @media screen and (max-width: 450px) {
          font-size: 6rem;
          letter-spacing: -0.7rem;
        }
     }
   }

   .consTitle {
     font-size: 3rem;
     font-weight: 800;
     color: #f8c62b;
     margin: .5rem 0;

     @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
   }

   .ape {
     color: #fff;
     font-size: 2rem;
     margin-bottom: -1rem;
   }
`;