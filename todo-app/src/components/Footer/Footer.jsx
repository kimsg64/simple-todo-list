import React from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  width: 100%;
  height: 80px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  color: white;
  background-color: #ff9191;
`;

const Footer = ({ todoList = [] }) => {
  return (
    <AppFooter>
      {todoList.filter((todo) => !todo.isDone).length} task remaining
    </AppFooter>
  );
};

export default Footer;
