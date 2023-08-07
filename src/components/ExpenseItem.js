import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
    const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expense.date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">{props.expense.amount} BDT</div>
                <h3>{props.expense.description}</h3>
            </div>
        </div>
    );
}

export default ExpenseItem;