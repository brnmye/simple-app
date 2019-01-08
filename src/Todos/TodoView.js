import React, { Component } from "react";

const ListView = props => {
  const { items, onDelete } = props;
  return (
    <div>
      <h3>All Todos</h3>
      <div>
        {items.map(todo => (
          <p key={todo.id}>
            Name: {todo.name}
            <br /> Description: {todo.description} <br />
            <button id={todo.id} onClick={() => onDelete(todo)}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ListView;
