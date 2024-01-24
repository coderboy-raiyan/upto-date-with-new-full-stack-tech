import styles from "./mealsLoader.module.css";
function MealsLoader() {
  return <p className={styles.loading}>Fetching meals...</p>;
}

export default MealsLoader;
