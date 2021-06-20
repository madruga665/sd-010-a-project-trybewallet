import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import logoTrybe from "../trybe.jpeg";

const HeaderStyled = styled.header`
  align-items: center;
  background: #ecf0f1;
  box-sizing: border-box;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  width: 100%;
  span {
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  color: #2c3e50;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    margin-right: 0.5rem;
    border-radius: 5px;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    return expenses
      .reduce(
        (accumulator, currentValue) =>
          accumulator +
          Number(
            currentValue.value *
              currentValue.exchangeRates[currentValue.currency].ask
          ),
        0
      )
      .toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <HeaderStyled>
        <LogoContainer>
          <img src={logoTrybe} alt="logo da trybe" />
          <Title>TRYBE WALLET</Title>
        </LogoContainer>
        <div>
          <span data-testid="email-field">
            Email:
            {email}
          </span>
          <span data-testid="total-field">
            Despesa Total: R$
            {this.totalExpenses()}
            BRL
          </span>
        </div>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// function totalExpences entendi a logica consultando o pr do adelino https://github.com/tryber/sd-010-a-project-trybewallet/blob/adelinojnr-project-trybewallet/src/utils/funtions.js
