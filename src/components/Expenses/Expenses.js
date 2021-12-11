import React, { useState } from "react";
import "../CSS/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesLists from "./ExpensesLists";
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
 
  const filteredExpenses = props.items.filter(expense =>{ 
    
    if (filteredYear==='ALL') return expense;     
     
    else return expense.date.getFullYear().toString()===filteredYear}
    
    );

    
console.log(filteredYear);
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter
        yearSelected={filteredYear}
        onFilterChange={filterChangeHandler}
      />

      {/* {filteredExpenses.length === 0 ?  <h1>No Expense Found!</h1> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      <ExpensesChart  expenses = {filteredExpenses}/>
      <ExpensesLists fexp={filteredExpenses}/>
      
    </Card>
    </div>
  );
};

export default Expenses;
