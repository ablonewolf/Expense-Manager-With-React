import {ExpenseItem} from "./ExpenseItem";
import React from "react";

export const ExpenseList = (props) => {
    return (
        <ul className='expenses-list'>
            {props.expenseData.map(expenseItem => {
                return <ExpenseItem
                    key={expenseItem.id}
                    amount={expenseItem.amount}
                    title={expenseItem.title}
                    description={expenseItem.description}
                    date={expenseItem.date}
                />
            })}
        </ul>
    )
}