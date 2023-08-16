import '../styles/NewExpense.css';
import {ExpenseForm} from "./ExpenseForm";

export const NewExpense = () => {
    return (
        <div className='new-expense'>
            <ExpenseForm/>
        </div>
    )
}