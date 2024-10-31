import React from 'react';
import recipeImage from './RecipeImage/recipe.png';

const RecipeCard = ({ name, ingredients, instructions, category, id }) => {
    return (
        <div className='tc grow bg-light-gray pa3 ma2 dib shadow-2'>
            <img alt='recipes' src={recipeImage} style={{ padding: '30px', width: '300px', height: '200px' }} />
            <div>
                <h2>{name}</h2>
                <p>{ingredients}</p>
                <p>{instructions}</p>
                <p><h4>{category}</h4></p>
            </div>
        </div>
    );
};

export default RecipeCard;