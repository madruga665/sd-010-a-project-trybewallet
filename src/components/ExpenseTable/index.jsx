import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseTableRow from "../ExpenseTableRow";
import { Table } from "./style";

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {expenses.map((expense) => (
          <ExpenseTableRow key={expense.id} expense={expense} />
        ))}
      </Table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
