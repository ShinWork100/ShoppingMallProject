import React from "react";
import NotificationItem from "./NotificationItem";
import SearchBar from "./SearchBar";
import NotificationList from "./NotificationList";

const containerStyle = {
  display: "flex",
  //   alignItems: "center",
  height: "100vh",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
};
const leftContainerStyle = {
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  //   marginLeft: "20px",
  //   width: "30%",
  float: "left",
};
const rightContainerStyle = {
  //   marginTop: "1rem",
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  //   marginLeft: "20px",
  width: "70%",
  float: "right",
};

const Information = () => {
  const data = [
    "apple",
    "banana",
    "cherry",
    "date",
    "fig",
    "grape",
    "honeydew",
  ];
  return (
    <div style={containerStyle}>
      <div style={leftContainerStyle}>
        <NotificationList />
      </div>
      <div style={rightContainerStyle}>
        <SearchBar data={data} />
        <NotificationItem
          title="Birkenstock 제목 시험 디렉토리"
          timestamp="10월 11일 14:01 (11분 전)"
          source="investing.com"
        />
      </div>
    </div>
  );
};

export default Information;
