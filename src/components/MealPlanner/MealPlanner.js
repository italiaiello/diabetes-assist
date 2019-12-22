import React, { useState } from 'react'
import PlusSign from '../../images/plus_sign.svg'
import HomeButton from '../../images/Home.svg';

const MealPlanner = props => {

    let recipeData = props.recipeData
    const [images, setImages] = useState([])

    const onMealTimeSelect = (e) => {
        props.handleClick(e)
        props.onRouteChange('mealSelect')
    }

    return (
        <div>
        {
            !recipeData.length ?
            <h1>Loading</h1>
            :
            <div className="pageDisplay">
                <div className="backAndHeading">
                    <div className="sectionHeading">
                        <div className="back">
                            <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
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
                                images[0] === undefined ?
                                <img src={PlusSign} alt="Plus sign" />
                                :
                                <img src="https://spoonacular.com/recipeImages/matcha-green-tea-and-pineapple-smoothie-801710.jpg" alt="Green tea and pineapple smoothie" />
                            }
                        </figure>
                        <div data-index="0">
                            <p>Breakfast</p>
                        </div>
                    </article>
                    <article id="lunch" className="chooseMealHome" onClick={onMealTimeSelect}>
                        <figure data-index="1">
                            {
                                images[1] === undefined ?
                                <img src={PlusSign} alt="Plus sign" />
                                :
                                <img src="https://spoonacular.com/recipeImages/matcha-green-tea-and-pineapple-smoothie-801710.jpg" alt="Green tea and pineapple smoothie" />
                            }
                        </figure>
                        <div data-index="1">
                            <p>Lunch</p>
                        </div>
                    </article>
                    <article id="dinner" className="chooseMealHome" onClick={onMealTimeSelect}>
                        <figure data-index="2">
                            {
                                images[2] === undefined ?
                                
                                <img src={PlusSign} alt="Plus sign" />
                                :
                                <img src="https://spoonacular.com/recipeImages/matcha-green-tea-and-pineapple-smoothie-801710.jpg" alt="Green tea and pineapple smoothie" />
                            }
                        </figure>
                        <div data-index="2">
                            <p>Dinner</p>
                        </div>
                    </article>
                </section>
                <figure className="homeButton">
                    <img src={HomeButton} alt="Home button" onClick={props.onRouteChange.bind(this, 'home')} />
                </figure>
            </div>
        }
        </div>
    )
}

export default MealPlanner