import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__description">
                <div>{props.expense.date.toDateString()}</div>
                <div className="expense-item__price">{props.expense.amount} BDT</div>
                <div>{props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;