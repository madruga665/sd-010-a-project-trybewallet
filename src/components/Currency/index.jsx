import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../../actions';
import { Select } from './style';

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
