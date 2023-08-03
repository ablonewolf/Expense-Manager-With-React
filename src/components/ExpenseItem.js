import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 3, 21);
    const expenseTitle = 'Bus Fare';
    const expenseAmount = 30;
    const expenseDescription = `Journey on bus from Mirpur To Gulshan.`;
    return (
        <div className="expense-item">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__description">
                <div>{expenseDate.toDateString()}</div>
                <div className="expense-item__price">{expenseAmount} BDT</div>
                <div>{expenseDescription}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;