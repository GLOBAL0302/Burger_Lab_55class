import Ingredients from "./Ingredients/Ingredients";
import React from "react";
import {IngredientsAll} from "../../types";
interface Props{
    ingredients:IngredientsAll[];
    onClickAddIngredient: (value:IngredientsAll) =>void;
    onClickReduceIngredient:(value:IngredientsAll)=>void;
}

const RenderIngredients:React.FC<Props> = ({ingredients,onClickAddIngredient,onClickReduceIngredient }) => {
    return (
        <>
            {ingredients.map(ingredient=>(
                <Ingredients
                    key={Math.random().toString()}
                    ingredients = {ingredient}
                    onClickAddIngredient = {onClickAddIngredient}
                    onClickReduceIngredient={onClickReduceIngredient}/>
            ))}
        </>
    );
};

export default RenderIngredients;