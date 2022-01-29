import Navbar from '../commons/Navbar';
import Search from './Search';
import Option from './homePageButton'
import Copyright from './copyright';
import Banner from './banner';
import './style.css';

const FrontPage = () => {
    return (
        <div>
            <Navbar />
            <Search count={0} />
            <Banner />
            <Option />
            <Copyright />
        </div>
    )
}

export default FrontPage;