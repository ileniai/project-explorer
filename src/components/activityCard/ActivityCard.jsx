import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.name}%27`);
  };

  return (
    <div className={styles.ActivityCard} onClick={onHandleClick}>
      <img className={styles.image} src={data.image.url} alt={data.name} />
      <h3 className={styles.title}>{data.name}</h3>
      <p className={styles.phone}>Phone: {data.telephone} $</p>
    </div>
  );
};

export default ActivityCard;