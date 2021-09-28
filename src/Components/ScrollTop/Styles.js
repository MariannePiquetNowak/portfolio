import styled from 'styled-components';

  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 90%;
   bottom: 100px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #27D7B7;

   @media (max-width: 770px) {
    display: none !important;
  }
`