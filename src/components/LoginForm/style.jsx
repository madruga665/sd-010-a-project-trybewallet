import styled, { keyframes } from 'styled-components';

export const AnimationUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(50px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const Button = styled.button`
  color: #2c3e50;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2ecc71;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms;
  :hover {
    color: white;
    background: #2ecc71;
  }
  :disabled {
    border: none;
    cursor: not-allowed;
    background-color: #95a5a6;
    color: #2c3e50;
    :hover {
      background-color: #95a5a6;
      color: #2c3e50;
    }
  }
`;

export const Form = styled.form`
  animation: 1s ${AnimationUp} ease-in-out;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #2ecc71;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  width: 25rem;
  height: 30rem;
`;

export const Input = styled.input`
  :focus {
    border: none;
    outline: 0;
  }
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #2ecc71;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80px;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  color: #2c3e50;
`;
