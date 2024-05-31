import {IngredientsAll} from "../../../types";


interface Props{
    ingredient:IngredientsAll;
}
const BurgerIngredient:React.FC<Props> = ({ingredient}) => {
    return (
        <>
            {new Array(ingredient.count).fill(<div key={Math.random().toString()} className={ingredient.name.name}></div>)}
        </>
    );
};

export default BurgerIngredient;