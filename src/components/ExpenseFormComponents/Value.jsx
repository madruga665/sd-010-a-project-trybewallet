import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  margin-left: 0.5rem;
`;
export default class Value extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <Input
          name="value"
          value={ value }
          id="value"
          type="number"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
