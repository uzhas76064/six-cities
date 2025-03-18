import styles from "./Loader.module.css"

const Loader = () => (
  <div className={styles.hotelLoadingSpinner}>
    <div className={styles.suitcase}></div>
    <p>Loading</p>
  </div>
)

export default Loader;
