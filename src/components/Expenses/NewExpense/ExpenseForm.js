import '../styles/ExpenseForm.css';

export const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='1' step='1'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-09-30'/>
                </div>
                <div className='new-expense__control'>
                    <label>Description</label>
                    <input type='text'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    );
}