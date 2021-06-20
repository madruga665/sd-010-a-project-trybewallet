import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { userLogin } from "../actions";
import styled from "styled-components";

const Button = styled.button`
  color: #2c3e50 ;
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
`;

const Form = styled.form`
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #2ecc71;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
`;
const Input = styled.input`
  :focus {
    border: none;
    outline: 0;
  }
  border: none;
  border-bottom: 1px solid #2ecc71;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Title = styled.h2`
  color:#2c3e50 ;
`

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      buttonDisable: true,
      redirect: false,
    };
    this.emailVerification = this.emailVerification.bind(this);
    this.passwordVerification = this.passwordVerification.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailVerification() {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(email);
    return result;
  }

  passwordVerification() {
    const { password } = this.state;
    const minimumPasswordLength = 5;
    return password.length >= minimumPasswordLength;
  }

  handleChange(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({ [name]: value });
    const verifications =
      this.emailVerification() && this.passwordVerification()
        ? this.setState({ buttonDisable: false })
        : this.setState({ buttonDisable: true });
    return verifications;
  }

  handleSubmit() {
    const { email } = this.state;
    const { getEmail } = this.props;
    getEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, buttonDisable, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <Form>
        <Title>TRYBE WALLET</Title>
        <label htmlFor="email">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            data-testid="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <Button
          type="submit"
          disabled={buttonDisable}
          onClick={this.handleSubmit}
        >
          Entrar
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  getEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

// regex email https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
// redirect condicional https://stackoverflow.com/questions/45805930/react-router-redirect-conditional
