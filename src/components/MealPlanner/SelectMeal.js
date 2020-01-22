import React, { useState, useRef } from 'react';
import Recipe from './Recipe'
import HomeButton from '../../images/Home.svg';

const SelectMeal = props => {

    console.log(props.recipeData)
    const mealImage = useRef()

    const headingArray = ["Breakfast", "Lunch", "Dinner"];
    const [counter, setCounter] = useState(0)
    const [showOptions, setShowOptions] = useState(false)
    const [image, setImage] = useState({
        'backgroundImage':`url(https://spoonacular.com/recipeImages/${props.recipeData[counter].image})`
    })

    const changeImage = (index) => {
        setImage({
            'backgroundImage':`url(https://spoonacular.com/recipeImages/${props.recipeData[index].image})`,
            'backgroundSize': 'cover',
            'backgroundRepeat': 'no-repeat'
        })
    }

    const changeMeal = (prevOrNext) => {
        if (prevOrNext === 'next') {
            if (counter === 2) {
                setCounter(0)
                changeImage(0)
            } else {
                setCounter(counter + 1)
                changeImage(counter + 1)
            }
        } else if (prevOrNext === 'prev') {
            if (counter === 0) {
                setCounter(2)
                changeImage(2)
            } else {
                setCounter(counter - 1)
                changeImage(counter - 1)
            }
        }

        

        return counter
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }

    const onMealSelect = (e) => {
        console.log(e.currentTarget.dataset.id)
        props.onRouteChange('recipe')
    }

    return (
        props.route === 'recipe' ?
        <Recipe counter={counter} recipeData={props.recipeData} onRouteChange={props.onRouteChange} />
        :
        <div className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={() => props.onRouteChange('meal')}></div>
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
                <div className="leftArrow" onClick={() => changeMeal('prev')}></div>
                <article ref={mealImage} className="foodCard" style={image}>
                    <div className={!showOptions ? "foodName" : "foodName showOptions"}>
                        <div className={showOptions ? "arrow-down" : "arrow-up"} onClick={toggleOptions}></div>
                        <p>{props.recipeData[counter].title}</p>
                        <div className={showOptions ? "mealInfo show" : "hide"}>
                            <h3>Meal Information</h3>
                            <p>{`Ready in: ${props.recipeData[counter].readyInMinutes} mins
                                | Servings: ${props.recipeData[counter].servings}`}                              
                            </p>
                            <button className="seeRecipe" onClick={onMealSelect}>See Recipe</button>
                        </div>
                        
                    </div>
                </article>
                <div className="rightArrow" onClick={() => changeMeal('next')}></div>
            </article>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" onClick={() => props.onRouteChange('home')}/>
            </figure>
        </div>
    )

}

export default SelectMeal