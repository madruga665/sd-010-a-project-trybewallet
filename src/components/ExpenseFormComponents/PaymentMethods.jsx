import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  margin-left: 0.5rem;
`;

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
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
