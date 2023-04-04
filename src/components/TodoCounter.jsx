import React from 'react';

const TodoCounter = ({total, completed}) => {
    return (
        <>
        <p className='task-title inline-block text-2xl sm:text-3xl
         font-extrabold text-slate-900 tracking-tight dark:text-slate-200'>
            Your Tasks
        </p><br/>
        <p className="py-3 inline-block text-2xl sm:text-sm
         font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Completed {completed} of {total}</p>
        </>
    )
}

export { TodoCounter };