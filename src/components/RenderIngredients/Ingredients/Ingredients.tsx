import {IngredientsAll} from "../../../types";
import React from "react";
import "./Ingredients.css";

interface Props {
    ingredients: IngredientsAll;
    onClickAddIngredient: (value:IngredientsAll) =>void;
    onClickReduceIngredient:(value:IngredientsAll)=>void;
}

const Ingredients:React.FC<Props> = ({ingredients, onClickAddIngredient, onClickReduceIngredient}) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <img
                onClick={()=>onClickAddIngredient(ingredients)}
                src={ingredients.name.img}
                alt="IngredientsBtn"
                style={{width:"150px"}} />
            <strong>{ingredients.name.name}</strong>
            <p>X{ingredients.count}</p>
            <img
                onClick={()=>onClickReduceIngredient(ingredients)}
                src="https://cdn.create.vista.com/api/media/small/259167070/stock-photo-illustration-trash-icon"
                alt="deleteBtn"
                style={{width:"50px"}}/>
        </div>
    );
};

export default Ingredients;