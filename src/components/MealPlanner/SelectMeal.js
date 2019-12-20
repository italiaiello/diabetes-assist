import React, { useState } from 'react';
import HomeButton from '../../images/Home.svg';

const SelectMeal = props => {

    const headingArray = ["Breakfast", "Lunch", "Dinner"]
    const [counter, setCounter] = useState(0)

    console.log(props.index)

    console.log(props.recipeData)

    const changeMeal = (prevOrNext) => {
        if (prevOrNext === 'next') {
            if (counter === 2) {
                setCounter(0)
            } else {
                setCounter(counter + 1)
            }
            console.log(counter)
        } else if (prevOrNext === 'prev') {
            if (counter === 0) {
                setCounter(2);
            } else {
                setCounter(counter - 1)
            }
            console.log(counter)
        }

        return counter
    }

    console.log(`${props.recipeData[0].imageUrls[0]}`)

    return (
        <div id="mealSelect">
            <h1>{headingArray[props.index]}</h1>
            <nav className="filterMeals">
                <button className="active">All</button>
                <button>Favourites</button>
                <button>New</button>
                <button>Recommended</button>
            </nav>
            <article className="availableMeals">
                <div className="leftArrow" onClick={changeMeal.bind(this, 'prev')}></div>
                <article className="foodCard">
                    <figure>
                        <img src={`https://spoonacular.com/recipeImages/${props.recipeData[counter].imageUrls[0]}`} alt={props.recipeData[counter].title} />
                    </figure>
                    <div className="foodName">
                        <p>{props.recipeData[counter].title}</p>
                    </div>
                </article>
                <div className="rightArrow" onClick={changeMeal.bind(this, 'next')}></div>
            </article>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" />
            </figure>
        </div>
    )

}

export default SelectMeal