import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useDate from "./hooks/useDate";

/* container */
const Wrapper = styled.div`
  min-width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [displayedDate, setDisplayedDate] = useState(new Date());
  const { dayStr, todayStr, getTimeStr } = useDate(displayedDate);
  // todo lsit 업데이트시 => local storage에 저장
  useEffect(() => {
    console.log("list has changed!", todoList);
    if (todoList.length > 0) {
      const targetDate = getTimeStr(displayedDate).slice(0, 8);
      localStorage.setItem(
        targetDate,
        JSON.stringify(
          todoList.filter(
            (todo) => todo.id.toString().slice(0, 8) === targetDate
          )
        )
      );
    }
  }, [todoList]);

  // 날짜 이동시 => todoList 불러오기
  useEffect(() => {
    console.log("displayed date has changed!", displayedDate);
    const listFromStorage = localStorage.getItem(
      getTimeStr(displayedDate).slice(0, 8)
    );
    if (listFromStorage && listFromStorage.length > 0) {
      console.log("list has parsed from storage", JSON.parse(listFromStorage));
    }
    listFromStorage && listFromStorage.length > 0
      ? setTodoList([...JSON.parse(listFromStorage)])
      : setTodoList([]);
  }, [displayedDate]);

  return (
    <Wrapper>
      <Header
        dayStr={dayStr}
        todayStr={todayStr}
        setTodoList={setTodoList}
        setDisplayedDate={setDisplayedDate}
      />
      <Body
        displayedDate={displayedDate}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Footer todoList={todoList} />
    </Wrapper>
  );
};

export default App;
