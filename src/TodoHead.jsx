import React from 'react';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";

const TodoHead = () => {
    return (
        <div className='headWrapper'>
            <div className='headWrapper-body'>
            <p className='py-3 inline-block text-2xl sm:text-2xl font-extrabold
             text-slate-900 tracking-tight dark:text-slate-200'>
                Create new task
            </p> 
            <TodoSearch />
            <CreateTodoButton />
            </div>
        </div>
    );
}

export { TodoHead }