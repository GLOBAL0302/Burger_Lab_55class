import "./BurgerSection.css"
import React from "react";
import {IngredientsAll} from "../../types";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import BurgerPrice from "./BurgerPrice/BurgerPrice";

interface Props{
    ingredients:IngredientsAll[];
    price:number;
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
                        key={Math.random().toString()}
                        ingredient={ingredient}/>
                ))}
                <div className="BreadBottom"></div>
            </div>
            <div className="d-flex justify-content-center">
                <BurgerPrice
                    price={price}
                />
            </div>
        </div>
    );
};

export default BurgerSection;