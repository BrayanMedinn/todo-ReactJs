import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoCounter } from "./TodoCounter";


const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false }
  ]

const TodoBody = () => {
  return (
    <div className="bodyWrapper">
      <TodoCounter />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </div>
  );
};
export { TodoBody };
