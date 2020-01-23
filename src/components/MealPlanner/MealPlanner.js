import React, { useState } from 'react'
import SelectMeal from './SelectMeal'
import PlusSign from '../../images/plus_sign.svg'
import HomeButton from '../../images/Home.svg';

const MealPlanner = props => {

    let recipeData = props.recipeData

    const [index, setIndex] = useState(0)
    const [slicedRecipeData, setSlicedRecipeData] = useState([])

    const onMealTimeSelect = (e) => {
        handleClick(e)
        props.onRouteChange('mealSelect')
    }

    const handleClick = (e) => {
        setIndex(e.target.dataset.index)
        console.log(e.target.dataset.index)

        switch(e.target.dataset.index) {
            case "0":
                setSlicedRecipeData(recipeData.slice(0, 3))
                break;
            case "1":
                setSlicedRecipeData(recipeData.slice(3, 6))
                break;
            case "2":
                setSlicedRecipeData(recipeData.slice(6, 9))
                break;
            default:
                return;
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
                <SelectMeal index={index}
                                slicedRecipeData={slicedRecipeData} 
                                    setBreakfastMeals={props.setBreakfastMeals} 
                                        setLunchMeals={props.setLunchMeals}
                                            setDinnerMeals={props.setDinnerMeals} 
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
                        <article id="breakfast" className="chooseMealHome" onClick={onMealTimeSelect} data-index="0">
                            <figure data-index="0">
                                {
                                    props.breakfastMeals === 'Nothing' ?
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${props.breakfastMeals}`} alt={props.breakfastMeals} />
                                }
                            </figure>
                            <div data-index="0">
                                <p>Breakfast</p>
                            </div>
                        </article>
                        <article id="lunch" className="chooseMealHome" onClick={onMealTimeSelect} data-index="1">
                            <figure data-index="1">
                                {
                                    props.dinnerMeals === 'Nothing' ?
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${props.lunchMeals}`} alt={props.lunchMeals} />
                                }
                            </figure>
                            <div data-index="1">
                                <p>Lunch</p>
                            </div>
                        </article>
                        <article id="dinner" className="chooseMealHome" onClick={onMealTimeSelect} data-index="2">
                            <figure data-index="2">
                                {
                                    props.dinnerMeals === 'Nothing' ?
                                    
                                    <img src={PlusSign} alt="Plus sign" />
                                    :
                                    <img src={`https://spoonacular.com/recipeImages/${props.dinnerMeals}`} alt={props.dinnerMeals} />
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