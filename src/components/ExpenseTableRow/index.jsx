import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeExpense } from "../../actions";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Button } from "./style";

class ExpenseTableRow extends Component {
  render() {
    const { expense, removeCurrentExpense } = this.props;
    const { description, tag, method, value, exchangeRates, currency } =
      expense;
    return (
      <tbody>
        <tr>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <Button>
              <FaEdit size={20} />
            </Button>
            <Button
              trash
              type="button"
              data-testid="delete-btn"
              onClick={() => removeCurrentExpense(expense)}
            >
              <BsTrash size={20} />
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}

ExpenseTableRow.propTypes = {
  expense: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  removeCurrentExpense: (expense) => dispatch(removeExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseTableRow);
