import React from 'react';

import './ExpensesFilter.css';

export const ExpensesFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.yearChangeHandler(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='all'>Show All</option>
                </select>
            </div>
        </div>
    );
};
