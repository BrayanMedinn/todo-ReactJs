import React from 'react';

const TodoSearch = () => {
    return (
        <input className='mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300
         placeholder-slate-400 focus:outline-none focus:border-sky-500
         focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder="Search" />
    )
}

export { TodoSearch };