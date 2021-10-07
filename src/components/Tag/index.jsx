import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './style';

export default class Tag extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <Select id="tag" name="tag" value={ value } onChange={ handleChange }>
          <option>selecione</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </Select>
      </label>
    );
  }
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
