import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    position: relative;

`;

export const HeaderLogo = styled.div`
      display: flex;
      font-weight: 400;
      font-size: 42px;

      span {
        background: linear-gradient(138.24deg, #436CF9 23.58%, #001A30 161.54%, rgba(255, 255, 255, 0) 161.55%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

      }
`;

export const HeaderMenu = styled.div`
      display: flex;
`;