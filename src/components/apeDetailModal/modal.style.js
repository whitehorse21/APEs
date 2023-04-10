import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
   background: rgba(255, 255, 255, 0.7);

   .btn {
      font-size: 1.5rem;
      margin-top: -1.5rem;
   }

   .long-text {
      overflow-wrap: break-word;
   }
   
   .modal-dialog {
      margin: auto !important;
      top: 50%;
      // left: 22% !important;
      transform: translateY(-50%) !important;
   }

   .modal-content {
      background: #111;
      color: #fff;
      width: 60rem;
      position: relative;
      // top: 50%;
      left: 50%;
      transform: translateX(-50%);

      @media screen and (max-width: 990px) {
         width: 50rem;
      }

      @media screen and (max-width: 830px) {
         width: 40rem;
      }

      @media screen and (max-width: 650px) {
         width: 100%;
      }
   }

   .modal-header {
     border-bottom: none;
   }
`;


export const ModalButton = styled.button`
border-radius: .5rem;
padding: .2rem 1.5rem;
margin: .3rem .5rem;
font-weight: 300;
border: 1px solid #fff;
font-size: 1rem;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width:350px) {
   padding: .1rem 1rem;
}

background: ${props => props.active ? '#FF4200' : 'transparent'};

.btn-top {
   font-weight: 300;
   font-size: .8rem;
}

.btn-btm {
   font-weight: 800;
   font-size: 1rem;
}

`;