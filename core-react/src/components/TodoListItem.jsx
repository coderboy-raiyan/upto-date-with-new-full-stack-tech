import React from "react";

function TodoListItem({ children, isComplete }) {
  return (
    <p>
      <input type="checkbox" defaultChecked={isComplete} />
      {children}
    </p>
  );
}

export default TodoListItem;
