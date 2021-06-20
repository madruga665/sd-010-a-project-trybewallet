import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Value from './ExpenseFormComponents/Value';
import Description from './ExpenseFormComponents/Description';
import Currency from './ExpenseFormComponents/Currency';
import PaymentMethods from './ExpenseFormComponents/PaymentMethods';
import Tag from './ExpenseFormComponents/Tag';
import { addExpense } from '../actions';
import styled from 'styled-components';

const Form = styled.form`
  align-items: center;
  background: #2c3e50;
  box-sizing: border-box;
  color: #ecf0f1;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  width: 100%;
  span {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  color: white;
  background: #2ecc71;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2ecc71;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms;
`;
class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubimit = this.handleSubimit.bind(this);
  }

  async handleSubimit(event) {
    event.preventDefault();
    const { addNewExpense, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    addNewExpense({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  handleChange(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <Form>
        <Value value={ value } handleChange={ this.handleChange } />
        <Description value={ description } handleChange={ this.handleChange } />
        <Currency value={ currency } handleChange={ this.handleChange } />
        <PaymentMethods value={ method } handleChange={ this.handleChange } />
        <Tag value={ tag } handleChange={ this.handleChange } />
        <Button type="submit" onClick={ this.handleSubimit }>Adicionar despesa</Button>
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  addNewExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (expense) => dispatch(
    addExpense(expense),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
