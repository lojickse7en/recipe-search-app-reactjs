import { RecordWithTtl } from 'dns';
import React, {  FormEvent, useEffect, useState } from 'react';
import './App.css';
import { IRecipe } from './IRecipe';
import RecipeComponent from './RecipeComponent';

function App() {
  //sate to hold on to what data to be displyed to the user. What items hve been found when a search has been performed from the API
  const [recipesFound, setRecipesFound] = useState<IRecipe[]>([]);
  
  //for the input box
  const [recipeSearch, setRecipeSearch] = useState('');
  
  //calls out to the proxy api created
  const searchForRecipes = async (query: String): Promise<IRecipe[]> => {
    const result = await fetch(`http://localhost:3001/?search=${query}`)
    // const x = await fetch(`http://localhost:3000/?search=${query}`)
    // console.log(await x.text());
    return (await result.json()).results;
    };
    
    const search = (event: FormEvent<HTMLFormElement>) => {
      //stops the form from submitting and reloading after the user submits the from
      event.preventDefault();

      //reference to the form
      const form = event.target as HTMLFormElement;

      //reference to the input
      const input = form.querySelector('#searchText') as HTMLFormElement;
      setRecipeSearch(input.value);
    };



   

  useEffect(() => {
    (async () => {
      //if there is any special charatcters in the recipeSearch state
      const query = encodeURIComponent(recipeSearch)
      //conditional statement to only run the API query when user has done a search
      if (query) {
        //call thee searchforRecipies function we created and pass the query fucntion created
      const response = await searchForRecipes(query);
      setRecipesFound(response);
      }
      
    })();
  }, [recipeSearch]);


  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form className='searchForm' onSubmit = {event => search(event)}>
        <input id='searchText' type='text'/>
        <button>Search</button>
      </form>
      {/* markup for component */}
      {recipeSearch && <p>Results for { recipeSearch }...</p>}
      <div className='recipe-container'>
        {recipesFound.length && 
          recipesFound.map(recipe =>
            (<RecipeComponent key={recipe.href} recipe={recipe}></RecipeComponent>)
          )}
      </div>
    </div>
  );
};

export default App;
