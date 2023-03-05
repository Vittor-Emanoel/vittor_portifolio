import styled from "styled-components";

export const ProjectsContainer = styled.div`    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 5rem;

      p {
           font-weight: 600;
           font-size: 32px;
           line-height: 48px;
      }

      /* display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      grid-gap: 1em;

      background: #1E1E1E; */
`;

export const ProjectsContent = styled.div`
  
`;

export const ProjectsBox = styled.div`

      display: flex;
      flex-direction: column;
      gap: 2rem;

      margin-top: 2.75rem;
      width: 312px;
      height: 311px;
      background-color: #1E1E1E;
      padding: 2.75rem 1.25rem;
      font-size:2rem ;

      p{
        font-weight: 400;
        font-size: 20px;
        line-height: 160%;
        color: #D9D9D9;
      }

      a{
        text-decoration: none;
        background: linear-gradient(138.24deg, #436CF9 23.58%, #001A30 161.54%, rgba(255, 255, 255, 0) 161.55%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        
      }
`;