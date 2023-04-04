import React from "react";
import { TodoBody } from "../components/TodoBody";
import { TodoHead } from "../components/TodoHead";

const Layout = () => {
  return (
    <div className="grid grid-cols-2">
      <TodoHead />
      <TodoBody />
    </div>
  );
};
export { Layout };
