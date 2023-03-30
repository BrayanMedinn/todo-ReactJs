import React from 'react';

const TodoList = (props) => {
    return (
        <section className='bodyWrapper-container'>
            <ul>
            {props.children}
            </ul>
        </section>
    )
}

export { TodoList }