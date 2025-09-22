import React from "react";
import ClaudeRecipe from "./components/claudeRecipe";
import IngredientsList from "./components/ingredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredient, setIngredients] = React.useState([]);

  function addIngredients(formdata) {
    const newIngredtient = formdata.get("ingredient");
    setIngredients((prev) => [...prev, newIngredtient]);
  }

  const [recipeShown, setRecipeShown] = React.useState(false);

  async function showRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredient);
    setRecipeShown(recipeMarkdown);
  }

  return (
    <main>
      <form action={addIngredients} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredient.length > 0 && (
        <IngredientsList ingredient={ingredient} showRecipe={showRecipe} />
      )}
      {recipeShown && <ClaudeRecipe recipeShown={recipeShown} />}
    </main>
  );
}
