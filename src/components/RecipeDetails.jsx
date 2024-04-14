import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setRecipeDetails(data);
    };

    getRecipeDetails();
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.details_container}>
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p><strong>Diet:</strong> {recipeDetails.diet}</p>
      <p><strong>Serves:</strong> {recipeDetails.servings}</p>
      <p><strong>Protein per serving:</strong> {recipeDetails.protein}</p>
      <p><strong>Fat per serving:</strong> {recipeDetails.fat}</p>
      <p><strong>Calories per serving:</strong> {recipeDetails.calories}</p>
      <p><strong>Cost per serving:</strong> {recipeDetails.pricePerServing}</p>
      <p><strong>Vitamin and mineral coverage:</strong> {recipeDetails.percentDailyNeeds}</p>
      <p><strong>Preparation time:</strong> {recipeDetails.readyInMinutes} minutes</p>
      <p><strong>Spoonacular score:</strong> {recipeDetails.spoonacularScore}</p>
      <p><strong>Ingredients:</strong> {recipeDetails.extendedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
      <p><strong>Instructions:</strong></p>
      <ul>
        {recipeDetails.analyzedInstructions[0].steps.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ul>
    </div>
  );



}
