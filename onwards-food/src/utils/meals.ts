import { IMeals } from "@/app/meals/components/Meals/interfaces/Meals.interface";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(): Promise<IMeals[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as IMeals[];
}

export function getMeal(slug: string): IMeals {
  const data = db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as IMeals;
  return data;
}

export function saveMeal(meal: IMeals) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // db.prepare(
  //   `INSERT INTO meals VALUES (
  //   null,
  //   @slug,
  //   @title,
  //   @image,
  //   @summary,
  //   @instructions,
  //   @creator,
  //   @creator_email
  // )`
  // ).run(meal);
}
