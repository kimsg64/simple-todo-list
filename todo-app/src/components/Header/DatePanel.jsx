import React from "react";
import styled from "styled-components";

const DatePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  & span:last-child {
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
  }
`;

const DatePanel = ({ dayStr = "", todayStr = "" }) => {
  return (
    <DatePanelContainer>
      <span>
        <strong>{todayStr}</strong>
      </span>
      <span>{dayStr}</span>
    </DatePanelContainer>
  );
};

export default DatePanel;
