import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  background: #2c3e50;
  box-sizing: border-box;
  color: #ecf0f1;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  width: 100%;
  span {
    margin-right: 1rem;
  }
`;

export const Button = styled.button`
  color: white;
  background: #2ecc71;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2ecc71;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background: #26aa5d;
    border: 2px solid #26aa5d;
  }
`;
