import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {remove} from '../Store/CartSlice';


const CartDetail = () => {

    const products = useSelector((state) => state.cart);
    console.log("Products in Cart Details :: ", products);
    const dispatch = useDispatch();

    const createList = () => {

        return products.map((product) =>{
            return <li><div><img src={product.image} height="200px" width="200px"></img> <h2> {product.title} </h2><button className='bg-sky-500/50 ... hover:bg-sky-500/100 ... text-white py-2 px-3 rounded-md mt-4' onClick={() => removeItem(product)}>Remove</button></div></li>
        })
    }

    const removeItem = (product) => {
        dispatch(remove(product));
    }
    return <>
             <h2> Cart Items Details </h2>
             <section>
             <ul>{createList()}</ul>
             </section>
             
           </>
}


export default CartDetail;