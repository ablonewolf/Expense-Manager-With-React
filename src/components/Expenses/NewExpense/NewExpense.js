import '../styles/NewExpense.css';
import {ExpenseForm} from "./ExpenseForm";

export const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense(enteredExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}