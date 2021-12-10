import React from "react";
import '../CSS/ExpensesLists.css'
import ExpenseItem from "./ExpenseItem";


const ExpensesLists = (props) => {
    let expenseContent = <h1>No Expenses Found!</h1>;
    if(props.fexp.length === 0){
        return <h2 className='expenses-list__fallback'>{expenseContent}</h2>;
    }
    return (
        <ul className='expenses-list'>
            {props.fexp.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
    );
}
export default ExpensesLists;