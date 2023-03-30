import React from "react";
import { TodoBody } from "./TodoBody";
import { TodoHead } from "./TodoHead";

const Layout = () => {
  return (
    <div className="grid grid-cols-2">
      <TodoHead />
      <TodoBody />
    </div>
  );
};
export { Layout };
