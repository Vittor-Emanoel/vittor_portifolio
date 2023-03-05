import styled from "styled-components";

export const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;  
`;


export const PresentationTitle = styled.h1`
       width: 100%;
        font-weight: 700;
  
        line-height: 54px;

      span{
          background: linear-gradient(138.24deg, #436CF9 23.58%, #001A30 161.54%, rgba(255, 255, 255, 0) 161.55%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;

      }

`;

export const PresentationSubtitle = styled.div`

  margin: 1.26rem 0;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  margin-bottom: 2.75rem;
`;