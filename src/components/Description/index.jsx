import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';

export default class Description extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <Input
          name="description"
          value={ value }
          id="description"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
