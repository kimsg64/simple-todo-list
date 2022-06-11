const useDate = (passedDateObj) => {
  const year = passedDateObj.getFullYear();
  const month = passedDateObj.getMonth() + 1;
  const date = passedDateObj.getDate();
  const day = passedDateObj.getDay();
  const hour = passedDateObj.getHours();
  const min = passedDateObj.getMinutes();
  const sec = passedDateObj.getSeconds();
  const monthStr = month < 10 ? `0${month}` : `${month}`;
  const dateStr = date < 10 ? `0${date}` : `${date}`;
  const dayStr =
    day === 0
      ? "Sunday"
      : day === 1
      ? "Monday"
      : day === 2
      ? "Tuesday"
      : day === 3
      ? "Wednesday"
      : day === 4
      ? "Thursday"
      : day === 5
      ? "Friday"
      : "Saturday";
  const todayStr = `${year}.${monthStr}.${dateStr}`;

  const getTimeStr = (passedDateObj) => {
    const year = passedDateObj.getFullYear();
    const month = passedDateObj.getMonth() + 1;
    const date = passedDateObj.getDate();
    // const hour = passedDateObj.getHours();
    // const min = passedDateObj.getMinutes();
    // const sec = passedDateObj.getSeconds();
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dateStr = date < 10 ? `0${date}` : `${date}`;
    return `${year}${monthStr}${dateStr}${hour}${min}${sec}`;
  };

  return {
    dayStr,
    todayStr,
    getTimeStr,
  };
};

export default useDate;
