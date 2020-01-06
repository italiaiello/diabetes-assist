import React, { useState } from 'react';
import HomeButton from '../../images/Home.svg';

const SelectMeal = props => {

    console.log(props.recipeData)

    const headingArray = ["Breakfast", "Lunch", "Dinner"];
    const [counter, setCounter] = useState(0)
    const [showOptions, setShowOptions] = useState(false)

    const changeMeal = (prevOrNext) => {
        if (prevOrNext === 'next') {
            if (counter === 2) {
                setCounter(0)
            } else {
                setCounter(counter + 1)
            }
        } else if (prevOrNext === 'prev') {
            if (counter === 0) {
                setCounter(2)
            } else {
                setCounter(counter - 1)
            }
        }

        return counter
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }

    return (
        <div className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                        <p>Back</p>
                    </div>
                    <h1>{headingArray[props.index]}</h1>
                </div>
            </div>
            <nav className="filter">
                <button className="active">All</button>
                <button>Favourites</button>
                <button>New</button>
                <button>Recommended</button>
            </nav>
            <article className="availableMeals">
                <div className="leftArrow" onClick={changeMeal.bind(this, 'prev')}></div>
                <article className="foodCard">
                    <div className={!showOptions ? "foodName" : "foodName showOptions"}>
                        <div className={showOptions ? "arrow-down" : "arrow-up"} onClick={toggleOptions}></div>
                        <p>{props.recipeData[counter].title}</p>
                        <div className={showOptions ? "mealInfo show" : "hide"}>
                            <p>{`Ready in: ${props.recipeData[counter].readyInMinutes} mins`}
                                <br/>
                                {`Servings: ${props.recipeData[counter].servings}`}                               
                            </p>
                        </div>
                    </div>
                </article>
                <div className="rightArrow" onClick={changeMeal.bind(this, 'next')}></div>
            </article>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" onClick={props.onRouteChange.bind(this, 'home')}/>
            </figure>
        </div>
    )

}

export default SelectMeal