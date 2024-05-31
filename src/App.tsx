import './App.css'
import React from "react";
import {meatIngredient, baconIngredient, cheeseIngredient, lettuceIngredient} from "./Allingredients";
import {IngredientsAll} from "./types";
import Ingredients from "./components/Ingredients/Ingredients";
import BurgerSection from "./components/BurgerSection/BurgerSection";

function App() {
    const [ingredients, setIngredients]= React.useState<IngredientsAll[]>([
        {name: meatIngredient, count: 0},
        {name: baconIngredient, count:0},
        {name:cheeseIngredient, count: 0},
        {name:lettuceIngredient, count:0}
    ])

    const onClickAddIngredient = (value:IngredientsAll)=>{
        setIngredients((prevState)=>{
            return prevState.map((item)=>{
                if(item.name.name === value.name.name){
                    return{
                        ...value,
                        count: value.count + 1
                    }
                }
                return item
            })
        })
    }

    const onClickReduceIngredient= (value:IngredientsAll)=>{
        setIngredients((prevState)=>{
            return prevState.map((item)=>{
                if(item.name.name === value.name.name){
                    return{
                        ...value,
                        count: value.count > 0? value.count - 1: 0
                    }
                }
                return item
            })
        })
    }
    return (
        <>
            <div className="wrapper border border-5 p-4 d-flex">
                <div style={{width:"60%"}}>
                    {ingredients.map(ingredient=>(
                        <Ingredients
                            key={ingredient.name.name}
                            ingredients = {ingredient}
                            onClickAddIngredient = {onClickAddIngredient}
                            onClickReduceIngredient={onClickReduceIngredient}/>
                    ))}
                </div>
                <div className='burgerSection d-flex align-items-center' style={{width:"40%"}}>
                    <BurgerSection/>
                </div>
            </div>
        </>
    )
}

export default App
