interface Props{
    price:number
}

const BurgerPrice:React.FC<Props> = ({price}) => {
    return (
        <>
            <strong className="border border-5 p-2 rounded">Price: {price}</strong>
        </>
    );
};

export default BurgerPrice;