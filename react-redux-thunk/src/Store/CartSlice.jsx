import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        add(state, action){
            console.log("Action in add() ", action);
            state.push(action.payload);
        },
        remove(state, action){
            console.log("Action in remove() ", action);
            return state.filter((item) => { return item.id !== action.payload.id });
           
        }

    }
})

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;