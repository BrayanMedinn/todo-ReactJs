import React, { useState } from "react";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";

const TodoHead = () => {
  return (
    <div className="headWrapper">
      <div className="headWrapper-body flex">
        <div>
          <p
            className="py-3 inline-block text-2xl sm:text-2xl font-extrabold
             text-slate-900 tracking-tight dark:text-slate-200"
          >
            Create new task
          </p>
        </div>
        <div>
          <CreateTodoButton />
        </div>
      </div>
    </div>
  );
};

export { TodoHead };
