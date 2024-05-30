import './App.css'
import React from "react";
import {meatIngredient, baconIngredient, cheeseIngredient, lettuceIngredient} from "./ingredientsAll";
import {IngredientsAll} from "./types";

function App() {
    const [ingredients, setIngredients]= React.useState<IngredientsAll[]>([
        {name: meatIngredient, count: 0},
        {name: baconIngredient, count:0},
        {name:cheeseIngredient, count: 0},
        {name:lettuceIngredient, count:0}
    ])
    return (
        <>
            <div className="container">
                <div className='ingredientsSection'>

                </div>
                <div className='burgerSection'>

                </div>

            </div>
        </>
    )
}

export default App
