import MealItem from "./MealItem";
import styles from "./MealsGrid.module.css";
import { IMeals } from "./interfaces/Meals.interface";

function MealsGrid({ meals }: { meals: IMeals[] }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal: IMeals) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
