import Navbar from '../commons/Navbar';
import NonVeg from './NonVeg/ProductList';
import Veg from './Veg/ProductList';

const DishType = () => {
    return (
        <div>
            <Navbar />
            <NonVeg />
            <Veg />
        </div>
    )
}

export default DishType;