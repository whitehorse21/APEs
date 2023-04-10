import styled, { css } from 'styled-components';

const commonStyles = css`
  color: #fff;
  font-family: Red Rose;
`;


export const SearchContainer = styled.input`
border-radius: 2rem;
font-weight: 300;
font-family: 'Red Rose';
padding: .5rem 1rem;
border: 1px solid #fff;
font-size: 1rem;
width: 90%;
background: transparent;
color: #fff;
appearance: none;
position: ${props => props.position ? 'absolute' : 'none'};
top: -5px;
padding-left: 3rem;

@media screen and (max-width: 600px) {
  position: static;
}
`;

export const SearchWrap = styled.div`
position: relative;
width: 100%;

svg {
  position: absolute;
  top: 9px;
  left: 16px;
}

.checkContainer {
  ${commonStyles}
  font-weight: 300;
  padding-left: .5rem;
  font-size: 1rem;

  .form-check {
    margin-bottom: .5rem;
  }

  .form-check-input[type=checkbox] {
    border: 1px solid #fff;
    // background: transparent;
    border-radius: 0;

    &:checked {
      background: #FF4200;
    }
  }

  
}
`;