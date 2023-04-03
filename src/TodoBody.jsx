import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";


const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false }
  ]

const TodoBody = () => {
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!search.length >= 1){
      searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <div className="bodyWrapper">
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoList>
      <TodoSearch 
            search={search}
            setSearch={setSearch}
            />
        {searchedTodos.map((todo) => (
          
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
    </div>
  );
};
export { TodoBody };
