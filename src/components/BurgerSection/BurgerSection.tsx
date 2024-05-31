import "./BurgerSection.css"
import React from "react";
import {IngredientsAll} from "../../types";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Props{
    ingredients:IngredientsAll[]
    price:number
}
const BurgerSection:React.FC<Props> = ({price, ingredients}) => {
    return (
        <div className="d-flex flex-column">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                    <div className="Seeds3"></div>
                </div>
                {ingredients.map(ingredient=>(
                    <BurgerIngredient
                        key={ingredient.name.name}
                        ingredient={ingredient}/>
                ))}
                <div className="BreadBottom"></div>
            </div>
            <strong>Price: {price}</strong>
        </div>
    );
};

export default BurgerSection;