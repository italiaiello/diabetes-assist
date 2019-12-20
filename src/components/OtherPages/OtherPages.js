import React, { useState } from 'react';
import Cybel from '../Cybel/Cybel'
import Emergency from '../Emergency/Emergency'
import Health from '../Health/Health'
import MealPlanner from '../MealPlanner/MealPlanner'
import Appointment from '../Appointment/Appointment'
import SelectMeal from '../MealPlanner/SelectMeal'
import { useDataFetch } from '../../hooks/DisplayRecipes'

const OtherPages = props => {

    let route = props.route

    const [isLoading, recipeData] = useDataFetch('https://api.spoonacular.com/recipes/search?apiKey=d464b770a6c2452cb7d56fc6ccea9eb5')
    const [index, setIndex] = useState(0);
    const [slicedRecipeData, setSlicedRecipeData] = useState([])

    const handleClick = (e) => {
        setIndex(e.target.getAttribute("data-index"));

        if (index === 0) {
            setSlicedRecipeData(recipeData.slice(0, 3))
        } else if (index === 1) {
            setSlicedRecipeData(recipeData.slice(3, 6))
        } else if (index === 3) {
            setSlicedRecipeData(recipeData.slice(6, 9))
        }
    }


    return (
        <div>
            {

            isLoading ? 
            <h1>Fetching Recipe Data</h1>
            :
            (
                route === 'health' ?
                <Health />
                :
                (
                    route === 'cybel' ?
                    <Cybel />
                    :
                    (
                        route === 'meal' ?
                        <MealPlanner recipeData={recipeData} handleClick={handleClick} onRouteChange={props.onRouteChange} />
                        :
                        (
                            route === 'mealSelect' ?
                            <SelectMeal recipeData={slicedRecipeData} index={index} />
                            :
                            (
                                route === 'appointment' ?
                                <Appointment />
                                :
                                <Emergency />
                            )
                        )
                    )
                )
            )
        }
        </div>
    )
}

export default OtherPages;