import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Option = function (){
        return (
        <div className='container justify-content-center mx-auto text-center m-3 p-3'>
          <h1>Choose Your Foody Mood</h1>
        <div className='p-3 text-center d-flex'>
        <div className='w-100'>
        <Link to={"/veg"}>
      <div>
        <button className='btn btn-outline-secondary btn-dark text-light col-8 p-3 py-5'>Veg</button>
      </div>
    </Link>
    </div>
          <div className="w-100">  
        <Link to={"/nonveg"}>
      <div >
        <button className='btn btn-outline-secondary btn-dark text-light col-8 p-3 py-5'>NonVeg</button>
      </div>
    </Link>
    </div>
        </div>
        
        </div>
        );
}

export default Option;