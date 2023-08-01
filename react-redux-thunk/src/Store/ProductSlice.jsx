// All async operations are done through THUNK.
// Redux Toolkit comes integrated with THUNK
// Reducers are synchronous and hence no API requests should happen in Reducer actions.
// THUNK is function returning a function.


import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
        getProducts(state, action){
             state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    } 

})

export const { getProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch) {
            dispatch(setStatus("Loading ProductsThunk"));
        try {
              const res = await fetch("https://fakestoreapi.com/products");
              const data = await res.json();
              console.log(" fetchProductsThunk() ...  ", data)
              dispatch(getProducts(data));
              dispatch(setStatus("Done ProductsThunk"))

        } catch (err) {
             console.log( "Error encountered during fetch fetchProductsThunk() ");
             dispatch(setStatus("Error in ProductsThunk"))
        }
    }
}