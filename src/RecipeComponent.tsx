import { IRecipe } from "./IRecipe";

const RecipeComponent =(props: {recipe: IRecipe}) => {
    const { recipe } = props;
    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.thumbnail || 'https://lojickse7en.github.io/recipe-search-app-reactjs/placeholder.jpg'} alt={recipe.title} />
                <p>{recipe.title}</p>
            </div>
            {recipe.ingredients && 
                <ul>
                    {recipe.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)}
                </ul>
            }
            <a href={recipe.href} target='_blank'>View Recipe</a>
        </div>
    )
};

export default RecipeComponent;

