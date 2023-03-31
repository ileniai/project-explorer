import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET } from "../../utils/http";
import ActivitiesList from "../../components/activitiesList";
import styles from "../../styles/Activities.module.scss";

export default function Activities() {
  const [searchParams] = useSearchParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("activities").then((res) => setActivities(() => res.results));
  }, []);

  const filterActivities = (list, type) =>
    list.filter((item) => item["@type"].includes(type))
    .filter((item)=>item.name.includes(searchParams.get("search")));

    /*const filterCategoryName = (list) =>
    list.filter((item)=> item.name.includer(searchParams.get("search")))*/
    

  return (
    <div className={styles.Activities}>
      <section>
        <h2 className={styles.title} >Restaurants</h2>
       <ActivitiesList data={filterActivities(activities, "Restaurants")} />
      </section>
      <section>
        <h2 className={styles.title}>Museum</h2>
        <ActivitiesList data={filterActivities(activities, "Museum")} />
      </section>
    </div>
  );
}