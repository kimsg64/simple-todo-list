import React, { useState } from "react";
import useDate from "../../hooks/useDate";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input[type="text"] {
    padding: 4px 8px;
    width: 60%;
    border: none;
    border-bottom: 2px solid #ececec;
  }
  & input[type="text"]:focus {
    outline: none;
    border-bottom: 2px solid gray;
  }
  & button {
    color: transparent;
    background-color: #f87272;
    margin-left: 4px;
    width: 27px;
    height: 27px;
    position: relative;
  }
  & button::after {
    content: "+";
    font-size: 27px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: -1px;
    left: 6px;
  }
`;

const Form = ({
  displayedDate = {},
  todoList = [],
  setTodoList = () => {},
}) => {
  // states
  const [todoStr, setTodoStr] = useState("");
  // date info
  const currentTime = useDate(new Date());

  // handel event
  const onChangeInput = (e) => {
    setTodoStr(e.target.value);
  };
  const onSubmitValue = (e) => {
    e.preventDefault();
    if (
      todoList.findIndex(
        (todo) => todo.id === parseInt(currentTime.getTimeStr(new Date()))
      ) >= 0
    ) {
      return;
    }

    todoStr.length > 0 &&
      setTodoList((prevList) => {
        return [
          ...prevList,
          {
            todoStr,
            isDone: false,
            id: parseInt(currentTime.getTimeStr(displayedDate)),
          },
        ];
      });
    setTodoStr("");
  };
  return (
    <FormWrapper onSubmit={onSubmitValue}>
      <input type="text" value={todoStr} onChange={onChangeInput} />
      <button>add</button>
    </FormWrapper>
  );
};

export default Form;
