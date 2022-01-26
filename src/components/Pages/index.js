import Navbar from '../commons/Navbar';
// import FrontPage from '../front-page';
// import Search from './Search';
// import Option from './homePageButton'
// import Copyright from './copyright';
// import Banner from './banner';
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