import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.trash ? "#e74c3c ": "#f1c40f"};
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms;
  width: 3rem;
  :hover {
    background: ${props => props.trash ? "#c0392b ": "#f39c12"};
  }
`;
