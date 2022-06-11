import React from "react";
import styled from "styled-components";

const RemoveButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
  font-size: 24px;
  background-color: transparent;
  padding: 0;
  position: relative;
  left: -4px;
  top: -6px;
  color: initial;
`;

const RemoveButton = ({ todo = {}, setTodoList = () => {} }) => {
  const onClickRemove = (e) => {
    e.stopPropagation();
    setTodoList((prevList) => {
      return [
        ...prevList
          .filter((prevTodo) => prevTodo.id !== todo.id)
          .sort((a, b) => a.id - b.id),
      ];
    });
  };
  return <RemoveButtonWrapper onClick={onClickRemove}>🗑️</RemoveButtonWrapper>;
};

export default RemoveButton;
