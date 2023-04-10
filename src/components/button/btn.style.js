import styled from 'styled-components';


export const CustomButton = styled.button`
border-radius: 2rem;
padding: .1rem 1rem;
margin: .3rem .2rem;
font-weight: 300;
border: 1px solid #fff;
font-size: 1rem;
color: #fff;

background: ${props => props.active ? '#FF4200' : 'transparent'};
`;