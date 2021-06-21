import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../../actions';
import styled from 'styled-components';

const Select = styled.select`
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  margin-left: 0.5rem;
`;

class Currency extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies, value, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <Select
          id="currency"
          name="currency"
          value={ value }
          onChange={ handleChange }
        >
          {currencies.map((currency) => (
            <option key={ currency }>{currency}</option>
          ))}
        </Select>
      </label>
    );
  }
}

Currency.propTypes = {
  getCurrency: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
