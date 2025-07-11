import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../Helpers/axiosInstance';
import toast from 'react-hot-toast';


const initialState = {
    productsData: [] , // Array of products
};

 export const getAllProducts = createAsyncThunk ('/products/getAll', async () =>{
    try {
        const products = axiosInstance.get('/products');
        toast.promise(products, {
            loading: 'loading all the products, please wait...',
            error: 'Something went wrong cannot load products',
            success: 'products loaded successfully!',
           
        });
        const apiResponse = await products;
        return apiResponse

    } catch (error) {
        console.log(error);
        toast.error('Something went wrong ');    
    }
})

 export const getproductDetails = createAsyncThunk ('/products/getDetails', async (id) =>{
    try {
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product, {
            loading: 'loading the product',
            error: 'Something went wrong cannot load product',
            success: 'product loaded successfully!',
           
        });
        const apiResponse = await product;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('Something went wrong ');    
    }
})




const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.fulfilled, (state, action) => {
                console.log(action.payload);
                state.productsData = action?.payload?.data?.data;
            })

        }
});



export default productSlice.reducer;