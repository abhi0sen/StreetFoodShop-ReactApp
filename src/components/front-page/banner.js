import img from './streetShop.jpg';


const Banner = function(){
    return(
        <div>
        <div>
            <img className='w-100' src={img} alt="Food Banner" />
        </div>
        <div className='my-2 border p-2'>
            <h3 className='mx-5'>Street Shops in Ujjain</h3>
        </div>
        </div>
    );
};

export default Banner;
