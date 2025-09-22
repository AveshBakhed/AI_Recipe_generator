import { nanoid } from "nanoid";

export default function IngredientsList(props) {
  const ingredientList = props.ingredient.map((ingredient) => {
    return <li key={nanoid()}>{ingredient}</li>;
  });

  return (
    <section className="List-and-Recipe">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientList}
      </ul>
      {props.ingredient.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.showRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
