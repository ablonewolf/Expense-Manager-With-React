import './ExpenseItem.css';
import {ExpenseDate} from "./ExpenseDate";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">{props.expense.amount} BDT</div>
                <h3>{props.expense.description}</h3>
            </div>
        </div>
    );
}

export default ExpenseItem;