import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './style';

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
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
