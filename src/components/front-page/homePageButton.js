import 'bootstrap/dist/css/bootstrap.min.css';

const Option = function (){
        return (
        <div className='container'>
        <div className='p-3 text-center'>
            <button className='btn btn-outline-secondary col-5 p-3 py-5'>Veg</button>
            <button className='btn btn-outline-secondary col-5 p-3 py-5 mx-2'>Non-Veg</button>
        </div>
        </div>
        );
}

export default Option;