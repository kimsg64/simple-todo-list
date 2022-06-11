import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styled from "styled-components";

const AppBody = styled.main`
  width: 100%;
  height: calc(100% - 160px);
`;

const Body = ({
  displayedDate = {},
  todoList = [],
  setTodoList = () => {},
}) => {
  return (
    <AppBody>
      <Form
        displayedDate={displayedDate}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </AppBody>
  );
};

export default Body;
