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
          type="text"
          name="Message"
          placeholder="Message"
          label="Message"
          required
        />
        <button>
          <span>Submit</span>
        </button>
      </form>
      <span className={styles.text}>Invia la tua richiesta..</span>
    </div>
  );
};

export default Footer;