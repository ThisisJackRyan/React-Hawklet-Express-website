import FoodItem from "./components/FoodItem";

const Order = () => {
    return (
        <div className="container flex">
            <div className="x4">
                <div className="flex">
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
                <div className="flex">
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    
                </div>
                <div className="flex">
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
            <div className="x1">Order</div>
        </div>
    )
}

export default Order;