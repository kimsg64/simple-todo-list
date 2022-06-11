import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Ul = styled.ul`
  width: 360px;
  height: 320px;
  overflow: auto;
`;

const TodoList = ({ todoList = [], setTodoList = () => {} }) => {
  return (
    <Ul>
      {todoList.length > 0 &&
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
        ))}
    </Ul>
  );
};

export default TodoList;
