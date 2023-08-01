import {Outlet} from 'react-router-dom';

const isLoggenIn = false;

const PrivateLayout = () => {

        return(<><h1>Private Layout</h1>
            {isLoggenIn ? <Outlet/> : <h2> User not logged in ... </h2>}
            </>);

}

export default PrivateLayout;