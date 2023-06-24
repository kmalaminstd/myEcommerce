import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productData: [],
    user: null
}



const ecommerceSlice = createSlice({
    name: 'ecomm',
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const simItem = state.productData.find(elm => elm._id === action.payload._id)
            if(simItem){
                simItem.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        removeItem: (state, action)=>{
            state.productData = state.productData.filter(elem => elem._id !== action.payload)
        },
        resetCart: (state)=>{
            state.productData = []
        },
        incrementQuantity: (state, action)=>{
            const selItem = state.productData.find(item => item._id === action.payload)
            if(selItem){
                selItem.quantity++
            }
        },
        decrementQuantity: (state, action)=>{
            const selItem = state.productData.find(item => item._id === action.payload)
            if(selItem.quantity === 1){
                selItem.quantity = 1
            }else{
                selItem.quantity--
            }
        },
        addUser: (state, action)=>{
            state.user = action.payload
        },
        removeUser: (state, action)=>{  
            state.user = null
        }
    }
})

export const {addToCart, removeItem, resetCart, incrementQuantity, decrementQuantity, addUser, removeUser} = ecommerceSlice.actions
export default ecommerceSlice.reducer