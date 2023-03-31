import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      
       <form >
        <input
          type="text"
          name="name"
          placeholder="Name"
          label="Name"
          required
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          label="Email"
          required
        />
        <input
          type="num"
          name="Password"
          placeholder="Password"
          label="Password"
          required
        />
        <button>
          <span>Submit</span>
        </button>
      </form>
      <span className={styles.text}>Registrati qui...</span>
    </div>
  );
};

export default Footer;