import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

class Login extends React.Component {
  render() {
    return (
      <Main>
        <LoginForm />
      </Main>
    );
  }
}

export default Login;
