import {IngredientsAll} from "../../../types";


interface Props{
    ingredient:IngredientsAll
}
const BurgerIngredient:React.FC<Props> = ({ingredient}) => {

    return (
        <div className={ingredient.name.name}>
        </div>
    );
};

export default BurgerIngredient;