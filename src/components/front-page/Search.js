const Search = (props) => {
    return (
        <div className='container-fluid d-flex justify-content-center bg-dark'>
            <div className='search'>
                <form action="" className='d-inline-block text-center bg-dark py-2'>
                    <input type="text" placeholder="Enter Your Food" />
                    <input className='mx-3 text-light btn btn-outline-secondary' type="submit" value="Search" />
                </form>
            </div>
            <div className='image bg-light'>
                <button className='btn'>
                    <img src="/cart.png" alt="Cart" />
                </button>
                <p className='text-danger cartCount'>{props.count}</p>
            </div>
        </div>
    );
}

export default Search;