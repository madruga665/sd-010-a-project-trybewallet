import React, { Component } from 'react';
import propTypes from 'prop-types';
import Select from './style';

export default class PaymentMethods extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <Select
          id="method"
          name="method"
          value={ value }
          onChange={ handleChange }
        >
          <option>selecione</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </Select>
      </label>
    );
  }
}

PaymentMethods.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
