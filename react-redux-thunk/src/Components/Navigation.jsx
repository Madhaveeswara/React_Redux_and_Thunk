import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";




const Navigation = () => {

    const items = useSelector((state) => state.cart);

    return (
        <nav>
            <a href="#">Products</a>
            {/* <a href="#">Cart: ({items.length})</a> */}
            <NavLink to="cartdetail">  Cart: ({items.length})</NavLink>
        </nav>
    )
}

export default Navigation;