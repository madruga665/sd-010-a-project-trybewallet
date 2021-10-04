import styled from "styled-components";

export const HeaderStyled = styled.header`
  align-items: center;
  background: #ecf0f1;
  box-sizing: border-box;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  width: 100%;
  a {
    text-decoration: none;
  }
  span {
    margin-right: 1rem;
  }
`;

export const Title = styled.h2`
  color: #2c3e50;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
    margin-right: 0.5rem;
    border-radius: 5px;
  }
`;