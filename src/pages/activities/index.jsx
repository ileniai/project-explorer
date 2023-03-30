import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import ActivitiesList from "../../components/activitiesList";
import styles from "../../styles/Activities.module.scss";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("activities").then((res) => setActivities(() => res.results));
  }, []);

  const filterActivities = (list, type) =>
    list.filter((item) => item["@type"].includes(type));

  return (
    <div className={styles.Activities}>
      <section>
        <h2 className={styles.title} >Restaurants</h2>
        <ActivitiesList data={activities} />
      </section>
      <section>
        <h2 className={styles.title}>Museum</h2>
        <ActivitiesList data={filterActivities(activities, "Museum")} />
      </section>
    </div>
  );
}