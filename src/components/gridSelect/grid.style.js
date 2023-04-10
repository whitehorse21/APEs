
import styled from 'styled-components';


export const GridContainer = styled.div`
border-radius: .5rem;
font-weight: 300;
border: 1px solid #fff;
padding: .25rem .2rem;
margin-left: 1rem;
margin-top: -2px;
height: 100%;

@media screen and (max-width: 430px) {
  margin-top: 1.5rem;
  margin-left: 0;
  width: 4.5rem;
}

svg {
  margin: 0 .3rem;
}

.grid-item {
  display: inline-block;
}

.one {
  border-right: 1px solid #fff;
}
`;