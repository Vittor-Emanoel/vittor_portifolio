import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 1;

  
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};


  background-color: #1E1E1E;

    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;
      gap: 2rem;

      li{
        list-style: none;
        font-weight: 400;
        font-size: 26px;
        line-height: 48px;
      }
    }

`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;

  
  
`;