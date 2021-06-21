import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  margin-left: 0.5rem;
`;
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
