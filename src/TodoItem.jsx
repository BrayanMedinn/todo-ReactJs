import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            <p className='mt-2 text-lg text-slate-700 dark:text-slate-400'>{props.text}</p>
        </li>
    )
}

export { TodoItem }