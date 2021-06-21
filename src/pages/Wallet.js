import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import styled, { keyframes } from "styled-components";

const AnimationUp = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

const Main = styled.main`
  animation: 1s ${AnimationUp} ease-in-out;
`

class Wallet extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </Main>
    );
  }
}

export default Wallet;
