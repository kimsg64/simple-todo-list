import React from "react";
import styled from "styled-components";

const ChangeButton = styled.button`
  width: 80px;
  height: 80px;
  color: transparent;
  background-color: inherit;
  position: relative;
  background: center no-repeat
    url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 330 330' style='enable-background:new 0 0 330 330;' xml:space='preserve'%3E%3Cpath id='XMLID_222_' d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
  background-size: 40%;
  &:hover {
    background-color: #d7d6d6;
  }
  &:first-child {
    transform: rotate(180deg);
  }
`;

let counter = 0;
let counterInSetState = 0;

const Button = ({
  children,
  setTodoList = () => {},
  setDisplayedDate = () => {},
}) => {
  const onClickChangeBtn = (e) => {
    console.log(`counter in event handler: ${++counter}`);
    e.preventDefault();
    setTodoList([]);
    setDisplayedDate((prevDisplayed) => {
      console.log(`to ${children}... prev displayed:`, prevDisplayed.getDate());
      console.log(`counter in setState: ${++counterInSetState}`);
      return children === "prev"
        ? new Date(prevDisplayed.setDate(prevDisplayed.getDate() - 1))
        : new Date(prevDisplayed.setDate(prevDisplayed.getDate() + 1));
    });
  };
  return <ChangeButton onClick={onClickChangeBtn}>{children}</ChangeButton>;
};

export default Button;
