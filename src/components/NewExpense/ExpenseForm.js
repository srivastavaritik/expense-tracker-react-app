import React,{useState} from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} placeholder='Enter Title Here...' />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" placeholder='Enter Amount Spent...'/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} min="2021-12-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
