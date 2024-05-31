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

    const price = ingredients.reduce((acc, elem)=>{
        return acc + (elem.count * elem.name.price)
    },30)
    return (
        <>
            <div className="wrapper border border-5 p-4 d-flex">
                <div style={{width:"60%"}}>
                    {ingredients.map(ingredient=>(
                        <Ingredients
                            key={Math.random().toString()}
                            ingredients = {ingredient}
                            onClickAddIngredient = {onClickAddIngredient}
                            onClickReduceIngredient={onClickReduceIngredient}/>
                    ))}
                </div>
                <div className='burgerSection d-flex align-items-center' style={{width:"40%"}}>
                    <BurgerSection
                        key={Math.random().toString()}
                        ingredients={ingredients}
                        price={price}
                    />
                </div>
            </div>
        </>
    )
}

export default App
