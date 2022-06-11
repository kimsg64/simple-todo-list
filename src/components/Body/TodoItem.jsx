import React from "react";
import RemoveButton from "./RemoveButton";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  padding: 0 20px;
  margin: 16px 0;

  &:hover {
    cursor: pointer;
  }
  & p {
    margin: 0 12px;
    width: 100%;
    text-decoration: ${(props) => props.lined && "line-through"};
  }
`;

const TodoItem = ({ todo = {}, setTodoList = () => {} }) => {
  // event handling
  const onClickTodo = () => {
    setTodoList((prevList) =>
      [
        ...prevList.filter((prevTodo) => prevTodo.id !== todo.id),
        { ...todo, isDone: !todo.isDone },
      ].sort((a, b) => a.id - b.id)
    );
  };

  return (
    <>
      {Object.keys(todo).length > 0 && (
        <Li onClick={onClickTodo} lined={todo.isDone}>
          <div>{todo.isDone ? "✅" : "⬜"}</div>
          <p>{todo.todoStr}</p>
          <RemoveButton todo={todo} setTodoList={setTodoList} />
        </Li>
      )}
    </>
  );
};

export default TodoItem;
