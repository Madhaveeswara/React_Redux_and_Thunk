import react from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Welcome from '../Pages/Welcome';
import PrivateLayout from '../Pages/PrivateLayout';
import Users from '../Pages/Users';
import Usersv2 from '../Pages/Usersv2';
import Home from '../Pages/Home';
import CartDetail from '../Pages/CartDetail';


const Router = createBrowserRouter(
    createRoutesFromElements(<>
    <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/" element={<Usersv2/>}></Route> */}
        {/* <Route path="/" element={<Users/>}></Route> */}
        {/* <Route path="/" element={<Register/>}></Route> */}
        <Route path="login" element={<Login/>}></Route>
        <Route path="cartdetail" element={<CartDetail/>}></Route>
        <Route path="user" element={<PrivateLayout/>}>
            <Route index element={<Welcome/>}></Route>
        </Route>
  
        </>
    )
)

const Routeroot = () => {
    return <RouterProvider  router={Router}/>
}

export default Routeroot;