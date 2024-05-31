import './App.css'
import React from "react";
import {meatIngredient, baconIngredient, cheeseIngredient, lettuceIngredient} from "./Allingredients";
import {IngredientsAll} from "./types";
import Ingredients from "./components/Ingredients/Ingredients";

function App() {
    const [ingredients, setIngredients]= React.useState<IngredientsAll[]>([
        {name: meatIngredient, count: 0},
        {name: baconIngredient, count:0},
        {name:cheeseIngredient, count: 0},
        {name:lettuceIngredient, count:0}
    ])

    const onClickAddIngredient = (value:IngredientsAll)=>{
        console.log(value)
    }
    return (
        <>
            <div className="wrapper" >
                {ingredients.map(ingredient=>(
                    <Ingredients
                        key={ingredient.name.name}
                        ingredients = {ingredient}
                        onClickAddIngredient = {onClickAddIngredient}/>
                ))}
                <div className='burgerSection'>

                </div>
            </div>
        </>
    )
}

export default App
