import React, { useEffect } from "react";
import useDate from "../../hooks/useDate";
import Button from "./Button";
import DatePanel from "./DatePanel";
import styled from "styled-components";

/* header */
const AppHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({
  dayStr = "",
  todayStr = "",
  setTodoList = () => {},
  setDisplayedDate = () => {},
}) => {
  return (
    <AppHeader>
      <Button setTodoList={setTodoList} setDisplayedDate={setDisplayedDate}>
        prev
      </Button>
      <DatePanel dayStr={dayStr} todayStr={todayStr} />
      <Button setTodoList={setTodoList} setDisplayedDate={setDisplayedDate}>
        next
      </Button>
    </AppHeader>
  );
};

export default Header;
