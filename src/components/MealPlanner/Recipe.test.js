import React from "react";
import { useRecipeFetch } from "../../hooks/DisplayMealRecipe";
import { renderHook, act } from "@testing-library/react-hooks";
import { shallow } from 'enzyme';
import Recipe from './Recipe';

let route = ""

const onRouteChange = (newRoute) => {
  route = newRoute;
}

const mockSlicedRecipeData = [
    {
        "id": 592479,
        "title": "Kale and Quinoa Salad with Black Beans",
        "readyInMinutes": 50,
        "servings": 6,
        "image": "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg",
        "imageUrls": [
            "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg"
        ]
    },
    {
        "id": 547775,
        "title": "Creamy Avocado Pasta",
        "readyInMinutes": 15,
        "servings": 2,
        "image": "Creamy-Avocado-Pasta-547775.jpg",
        "imageUrls": [
            "Creamy-Avocado-Pasta-547775.jpg"
        ]
    },
    {
        "id": 818941,
        "title": "Avocado Toast with Eggs, Spinach, and Tomatoes",
        "readyInMinutes": 10,
        "servings": 1,
        "image": "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg",
        "imageUrls": [
            "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg"
        ]
    },
]

const mockCounter = 1

const mockProps = {
    onRouteChange: onRouteChange,
    slicedRecipeData: mockSlicedRecipeData,
    counter: mockCounter
}

describe("useDataApi", () => {

    it('renders', () => {
        const wrapper = shallow(<Recipe {...mockProps} />)
        expect(wrapper).toMatchSnapshot()
    })

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useRecipeFetch());

    expect(result.current).toStrictEqual([true, []]);
  });
});