// import useFetch from '../Hooks/useFetch';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { add } from '../Store/CartSlice';
import { fetchProducts } from '../Store/ProductSlice';

const ProductList = () => {

    const dispatch = useDispatch();

    //const { users, isLoading, error } = useFetch("https://fakestoreapi.com/products?limit=5");
    const url = 'https://fakestoreapi.com/products';

    // console.log(" Users :: ", users);
    // console.log(" Errors :: ", error);

    // const [products, setProducts] = useState([]);

    const { data, status }= useSelector((state) => state.product);
   
    // const {data: products }= useSelector((state) => state.data);

    console.log(" Data in ProductList ", data);
    console.log(" Status in ProductList ", status);
   
    let products = data;

    useEffect(() => {
        // getProducts();
        dispatch(fetchProducts());
    },[])


    if(status === "Loading ProductsThunk") {
        return <h2>Loading ...</h2>
    } else if(status === "Error in ProductsThunk"){
        return <h2>Error occurred during fetch ...</h2>
    }
    // const getProducts = () => {
    //     console.log(" URL :: ",url);

    //         fetch(url).then((res) => {
    //             console.log(" Response  in UseFetch()  :: ", res);
    //             return res.json();
    //         }).then((data) => {
    //             console.log(" Data  in UseFetch() :: ", data);
    //             setProducts(data);
                
    //         }).catch((err) => {
    //             console.log(" Error in UseFetch() ",err);
               
    //         })

    // }

    const createList = () => {

        return  products.map((obj) =>{
                  return <li className="bg-gray-300 border p-5 m-5 text-black">  <div>
                        <h1>{obj.title}</h1>
                        <button className='bg-sky-500/50 ... hover:bg-sky-500/100 ... text-white py-2 px-3 rounded-md mt-4' onClick={() => addProductHandler(obj)}>Add</button>
                    </div>
                    </li>
                })
        
     }
    
     const addProductHandler = (product) => {
        dispatch(add(product));  // Action Event name + Payload
        console.log(" Product Added ... ")
     }

    return( 
    <section className="container mx-auto">
    <h2>Products List</h2>
    <ul className="flex flex-wrap">{products && createList()}</ul>
    </section>
    )
}

export default ProductList;