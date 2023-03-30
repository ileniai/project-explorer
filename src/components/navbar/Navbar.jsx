import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${inputValue.toLowerCase()}`);
    setInputValue(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <h1>POLO</h1>
      <ul>
        <li>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">About</Link>
        </li>
        <li>
          <Link className={styles.link} to="/activities">Activities</Link>
        </li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Search..."
          required
        />
      </form>
    </div>
  );
};

export default Navbar;