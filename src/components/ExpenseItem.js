import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <h2>{props.title}</h2>
            <div className="expense-item__description">
                <div>{props.date.toDateString()}</div>
                <div className="expense-item__price">{props.amount} BDT</div>
                <div>{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;