import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// Styles
const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    // width: "100%",
    height: "100vh",
    backgroundColor: "#222",
  },
  notificationsContainer: {
    flex: 1,
    maxWidth: "300px",
    overflowY: "auto",
  },
  notification: {
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    color: "white",
    width: "15rem",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "white",
  },
  title: {
    fontSize: "16px",
  },
  subTitle: {
    fontSize: "12px",
    color: "grey",
  },
};

// Sample Notification Component
const Notification = ({ title, subTitle }) => (
  <div style={styles.notification}>
    <div style={styles.title}>{title}</div>
    <div style={styles.subTitle}>{subTitle}</div>
  </div>
);

// Main Component
const NotificationList = () => {
  // Sample data
  const notifications = [
    { title: "10월 10일 월요일", subTitle: "美 미뤄둔 신작출하(하지시간)" },
    { title: "10월 10일 월요일", subTitle: "올림픽 보도에서 하치" },
    // ... Add more data here as needed
  ];

  return (
    <div style={styles.mainContainer}>
      <div style={styles.notificationsContainer}>
        <div style={styles.header}>
          <LocalFireDepartmentIcon />
          Recent Hot Topic
        </div>
        {notifications.map((note, index) => (
          <Notification
            key={index}
            title={note.title}
            subTitle={note.subTitle}
          />
        ))}
      </div>
      {/* Additional content can go here, to the right of the notifications */}
    </div>
  );
};

export default NotificationList;
