import { IMeals } from "@/app/meals/components/Meals/interfaces/Meals.interface";
import sql from "better-sqlite3";

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
