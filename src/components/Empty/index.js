import styles from "./Empty.module.css";

const Empty = ({ text }) => {
  return <div className={styles.empty}>{text}</div>;
};

export default Empty;
