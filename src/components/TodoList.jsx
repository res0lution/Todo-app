import React from "react";

import TodoItem from "./TodoItem";

function TodoList({ items, clearList, handleDelete, handleEdit }) {
  return (
    <section>
      <ul className="list group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>

        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
      </ul>

      <button
        onClick={clearList}
        type="button"
        className="btn btn-danger text-uppercase mt-5"
      >
        Cleat List
      </button>
    </section>
  );
}

export default TodoList;
