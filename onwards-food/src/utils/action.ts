"use server";

import { IMeals } from "@/app/meals/components/Meals/interfaces/Meals.interface";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  const file = formData.get("image");

  saveMeal(meal as IMeals);
}
