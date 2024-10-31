import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
        <div>
            {
                recipes.map((user, i) => {
                    return (
                        <RecipeCard
                            name={recipes[i].name}
                            ingredients={recipes[i].ingredients}
                            instructions={recipes[i].instructions}
                            category={recipes[i].category}
                        />
                    );
                })
            }
        </div>
    );
};

export default RecipeList;

