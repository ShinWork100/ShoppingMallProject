// Styles (for simplicity, using inline styles)
import LinkIcon from "@mui/icons-material/Link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    padding: "25px",
    borderRadius: "5px",
    width: "100%", // Set width to 100% to maximize to the container
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  circle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "grey",
    marginRight: "10px",
  },
  textContainer: {
    marginRight: "10px",
  },
  title: {
    color: "#fff",
    fontSize: "16px",
  },
  timestamp: {
    color: "lightgrey",
    fontSize: "12px",
  },
  source: {
    color: "lightgrey",
    fontSize: "12px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5px", // Optional: to give a small gap between buttons
  },
};

// Component
// Component
const NotificationItem = ({ title, timestamp, source }) => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.circle}></div>
        <div style={styles.textContainer}>
          <div style={styles.title}>{title}</div>
          <div style={styles.timestamp}>{timestamp}</div>
        </div>
        <div style={styles.source}>{source}</div>
      </div>
      <div style={styles.iconContainer}>
        <Button style={styles.button} startIcon={<LinkIcon />}></Button>
        <Button style={styles.button} startIcon={<ContentCopyIcon />}></Button>
      </div>
    </div>
  );
};

export default NotificationItem;
