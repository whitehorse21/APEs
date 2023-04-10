import styled, { css } from 'styled-components';

const commonStyles = css`
  color: #fff;
  font-family: Red Rose;
`;

export const CollectionContainer = styled.div`
  ${commonStyles}
  margin: auto;
  padding: 0 100px;
  font-size: 1.2rem;
  text-align: left;
  max-width: 1500px;
  margin-bottom: 120px;

  @media screen and (max-width: 700px) {
    padding: 0 70px;
  }

  @media screen and (max-width: 515px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 435px) {
    padding: 0 30px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .filter {
    font-size: 1.6rem;
    font-weight: 800;
  }

  .alpha {
    line-height: 1.5;
    margin-right: 1rem;
  }

  h4.categoryTitle {
    font-size: 1.2rem;
  }

  .close-button {
    padding: 5px;
    border-radius: 5px;
    border: 0px solid #ffffff;
    color: #ffffff;
    margin-left: 10px;
    background: transparent;
  }
  .top-search {
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .grid-option {
    justify-content: end;

    @media screen and (max-width: 1200px) {
      justify-content: start;
      margin-top: 2rem;
    }

    @media screen and (max-width: 430px) {
      flex-direction: column;
    }
  }

  .collection  {

    input {
      position: relative;
      width: 350px;

      @media screen and (max-width: 400px) {
        width: 300px;
      }
    }

    button {
      position: absolute;
      top: -.25rem;
      left: 255px;
      @media screen and (max-width: 400px) {
        left: 205px;
      }
    }

  }

`;
