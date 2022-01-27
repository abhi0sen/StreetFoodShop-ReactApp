import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Option = function (){
        return (
        <div className='container'>
        <div className='p-3 text-center d-inline'>
        <div className='w-100'>
        <Link to={"/veg"}>
      <div>
        <button className='btn btn-outline-secondary col-11 p-3 py-5'>Veg</button>
      </div>
    </Link>
    </div>
          <div className="w-100">  
        <Link to={"/nonveg"}>
      <div >
        <button className='btn btn-outline-secondary col-11 p-3 py-5'>NonVeg</button>
      </div>
    </Link>
    </div>
        </div>
        
        </div>
        );
}

export default Option;