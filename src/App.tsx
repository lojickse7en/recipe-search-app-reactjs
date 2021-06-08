import React, { FormEvent, useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { StringifyOptions } from 'node:querystring';
import { queryAllByAltText } from '@testing-library/dom';
import { IRecipe } from './IRecipe';
import Recipe from './RecipeComponent';
import RecipeComponent from './RecipeComponent';

function App() {
  const [recipesFound, setRecipesFound] = useState<IRecipe[]>([]);
  const [recipeSearch, setRecipeSearch] = useState('');

  const searchForRecipes = async (query: String): Promise<IRecipe[]> => {
    const result = await fetch(`https://lojickse7en.github.io/recipe-search-app-reactjs/?search=${query}`)
    const x = await fetch(`https://lojickse7en.github.io/recipe-search-app-reactjs/?search=${query}`)
    console.log(await x.text());
    return (await result.json());
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch);
      const response = await searchForRecipes(query);
      setRecipesFound(response);
    })();
  }, [recipeSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setRecipeSearch(input.value);
    input.value = '';
  };

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)} >
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      {recipeSearch && <p>Results for {recipeSearch}...</p>}
      <div className="recipes-container">
        {recipesFound.length &&
          recipesFound.map(recipe =>
            (<RecipeComponent key={recipe.href} recipe={recipe}></RecipeComponent>))
        }
      </div>
    </div>
  );
}

export default App;
