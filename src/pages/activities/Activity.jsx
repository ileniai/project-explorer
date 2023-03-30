import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});


  useEffect(() => {
    GET(`activities?$filter=name%20eq%20%27${id}`).then((res) =>
      setActivity(() => res.results[0])
    );
  }, []);

  return (
    <div className={styles.Activity}>
      {activity.name ? (
        <>
          <img src={activity.image.url} alt={activity.name} />
          <section>
            <Link  to="/activities">
              <button className={styles.btn}>Torna indietro</button>
            </Link>
            <h1>{activity.name}</h1>
            <p className={styles.phone}> 📞  {activity.telephone}</p>
            <ul>
              {activity.address.length &&
                activity?.address.map((addr, i) => (
                  <li key={i}>
                    <p className={styles.fff}>Country: {addr.addressCountry}</p>
                    <p>Locality: {addr.addressLocality}</p>
                    <p>Region: {addr.addressRegion}</p>
                  </li>
                ))}
            </ul>
            <iframe
              width="500"
              height="245"
              src={`https://maps.google.com/maps/?q=+${activity.geo.latitude}+,+${activity.geo.longitude}&output=embed`}
            ></iframe>
          </section>
          
        </>
      ) : (
        <h3>Il prodotto cercato non è disponibile....</h3>
      )}
    </div>
  );
}