import React from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" placeholder='Enter Title Here...' />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" placeholder='Enter Amount Spent...'/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-12-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
