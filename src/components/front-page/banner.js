import img from './streetShop.jpg';
import './style.css';

const Banner = function(){
    return(
        <div>
        <div>
            <img className='w-100' src={img} alt="Food Banner" />
        </div>
        <div className='my-2 border p-2 position-absolute pos text-dark'>
            <h3 className='mx-5 text-primary'>Street Shops in Ujjain</h3>
        </div>
        </div>
    );
};

export default Banner;
