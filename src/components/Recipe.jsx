import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Recipe.module.css';

export default function Recipe() {

  const [recipe, setRecipe] = useState([]);


  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await response.json();
    setRecipe(data.recipes);
    console.log(data.recipes);
    console.log(data)
  };

  return (
    <div className={styles.recipe_container}>
      <h1>Recipes</h1>
      {recipe.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className={styles.recipe_link}>
          <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
