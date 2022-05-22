const Search = (props) => {
    return (
        <div className='container-fluid d-flex justify-content-center bg-secondary'>
            <div className='search'>
                <form action="" className='d-inline-block text-center py-2'>
                    <input className="my-2" type="text" placeholder="Search Your Food" onChange={(e) => props.searchHandler(e.target.value)} />
                    <input className='mx-3 text-light btn btn-outline-dark' type="submit" value="Search" />
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