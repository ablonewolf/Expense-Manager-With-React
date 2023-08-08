import ExpenseItem from "./ExpenseItem";
import React from "react";
import './Expenses.css';
import {Card} from "./Card";

export function DisplayExpenses(props) {
    return (
        // eslint-disable-next-line array-callback-return
        <Card className='expenses'>
            <h1>Expense Item List</h1>
            {props.expenses.map(expenseItem => {
                return <ExpenseItem
                    expense={expenseItem}
                />
            })}
        </Card>
    )
}