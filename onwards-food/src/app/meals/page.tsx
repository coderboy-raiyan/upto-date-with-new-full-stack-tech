import Link from "next/link";
import { Suspense } from "react";
import { getMeals } from "../../utils/meals";
import MealsLoader from "./components/Loader/mealsLoader";
import MealsGrid from "./components/Meals/MealsGrid";
import styles from "./page.module.css";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoader />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
