import {IngredientsAll} from "../../types";
import React from "react";

interface Props {
    ingredients: IngredientsAll
    onClickAddIngredient: (value:IngredientsAll) =>void
}

const Ingredients:React.FC<Props> = ({ingredients, onClickAddIngredient}) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <img
                onClick={()=>onClickAddIngredient(ingredients)}
                src={ingredients.name.img}
                alt="IngredientsBtn"
                style={{width:"200px"}} />
            <strong>{ingredients.name.name}</strong>
            <p>X{ingredients.count}</p>
            <img
                src="https://cdn.create.vista.com/api/media/small/259167070/stock-photo-illustration-trash-icon"
                alt="deleteBtn"
                style={{width:"100px"}}/>
        </div>
    );
};

export default Ingredients;