import React, { useState } from 'react'
import SelectMeal from './SelectMeal'
import PlusSign from '../../images/plus_sign.svg'
import HomeButton from '../../images/Home.svg';

const MealPlanner = props => {

    let recipeData = props.recipeData
    console.log(recipeData)
    console.log(props.index)
    const [index, setIndex] = useState(0);
    const [slicedRecipeData, setSlicedRecipeData] = useState([])
    const [breakfastMeals, setBreakfastMeals] = useState("Nothing")
    const [lunchMeals, setLunchMeals] = useState("Nothing")
    const [dinnerMeals, setDinnerMeals] = useState("Nothing")
    console.log(breakfastMeals, lunchMeals, dinnerMeals)

    const onMealTimeSelect = (e) => {
        props.handleClick(e)
        props.onRouteChange('mealSelect')
    }

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
            !recipeData.length ?
            <h1>Loading</h1>
            :
            (
                props.route === 'mealSelect' || props.route === 'recipe' ?
                <SelectMeal index={props.index} 
                                recipeData={props.recipeData} 
                                    setBreakfastMeals={setBreakfastMeals} 
                                        setLunchMeals={setLunchMeals}
                                            setDinnerMeals={setDinnerMeals} 
                                                onRouteChange={props.onRouteChange}
                />
                :
                <div className="pageDisplay">
                    <div className="backAndHeading">
                        <div className="sectionHeading">
                            <div className="back">
                                <div className="leftArrow" onClick={() => props.onRouteChange('home')}></div>
                                <p>Back</p>
                            </div>
                            <h1>Meal Planner</h1>
                        </div>
                    </div>
                    <h2>Choose Your Meals</h2>
                    <section>
                        <article id="breakfast" className="chooseMealHome" onClick={onMealTimeSelect}>
                            <figure data-index="0">
                                {
                                    breakfastMeals === 'Nothing' ?
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${breakfastMeals}`} alt={breakfastMeals} />
                                }
                            </figure>
                            <div data-index="0">
                                <p>Breakfast</p>
                            </div>
                        </article>
                        <article id="lunch" className="chooseMealHome" onClick={onMealTimeSelect}>
                            <figure data-index="1">
                                {
                                    dinnerMeals === 'Nothing' ?
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${lunchMeals}`} alt={lunchMeals} />
                                }
                            </figure>
                            <div data-index="1">
                                <p>Lunch</p>
                            </div>
                        </article>
                        <article id="dinner" className="chooseMealHome" onClick={onMealTimeSelect}>
                            <figure data-index="2">
                                {
                                    dinnerMeals === 'Nothing' ?
                                    
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${dinnerMeals}`} alt={dinnerMeals} />
                                }
                            </figure>
                            <div data-index="2">
                                <p>Dinner</p>
                            </div>
                        </article>
                    </section>
                    <button className="done">Done</button>
                    <figure className="homeButton">
                        <img src={HomeButton} alt="Home button" onClick={() => props.onRouteChange('home')} />
                    </figure>
                </div>
            )
        }
        </div>
            
            
    )
}

export default MealPlanner