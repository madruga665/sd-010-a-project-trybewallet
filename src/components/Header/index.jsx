import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logoTrybe from "../../trybe.jpeg";
import { Link } from "react-router-dom";
import { HeaderStyled, LogoContainer, Title } from "./style";

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
      ).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <HeaderStyled>
        <Link to="/">
        <LogoContainer>
          <img src={logoTrybe} alt="logo da trybe" />
          <Title>TRYBE WALLET</Title>
        </LogoContainer>
        </Link>
        <div>
          <span data-testid="email-field">
            <strong>Email: </strong>
            {email}
          </span>
          <span data-testid="total-field">
            <strong>Despesa Total: </strong>
            R$ {this.totalExpenses()}
            BRL
          </span>
        </div>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// function totalExpences entendi a logica consultando o pr do adelino https://github.com/tryber/sd-010-a-project-trybewallet/blob/adelinojnr-project-trybewallet/src/utils/funtions.js
