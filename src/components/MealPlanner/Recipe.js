import React from 'react'
import { useRecipeFetch } from '../../hooks/DisplayMealRecipe'

const Recipe = props => {

    console.log(props.recipeData[props.counter].id)

    const [isLoading, recipeData] = useRecipeFetch(`https://api.spoonacular.com/recipes/${props.recipeData[props.counter].id}/analyzedInstructions?apiKey=d464b770a6c2452cb7d56fc6ccea9eb5`, props.recipeData[props.counter].id)

    return (
        isLoading ?
        <h1>Fetching Recipe...</h1>
        :
        <article className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                        <p>Back</p>
                    </div>
                    <h1>Recipe Stuff</h1>
                </div>
            </div>
        </article>
    )
}

export default Recipe