import {
    createSlice,
    nanoid,
    createAsyncThunk,
    createEntityAdapter,
    current,
    createSelector,
} from "@reduxjs/toolkit";

import {
    getAllProducts, deleteProduct, createProduct, updateProduct
} from '../services/AllApi'

const productAdaptor = createEntityAdapter({

});

const initialState = productAdaptor.getInitialState({
    selectId: (entity) => entity.guidRow,
    status: "idle",
    error: null,
});

export const fetchProducts = createAsyncThunk("/products/fetchProducts", async () => {

    var sent_data = `{
        "search": [
      
        ],
        "orderBy": [
      
        ],
        "props": {
      
        },
        "relations": {
      
        },
        "exportColumns": [
      
        ]
      }`


    const response = await getAllProducts(sent_data);

    return response.data.items;
});

export const deleteApiProduct = createAsyncThunk(
    "/products/deleteProduct",
    async (initialId) => {

        var d = await deleteProduct(initialId);

        console.log(d)

        return initialId;
    }

);

export const addNewProduct = createAsyncThunk(
    "/products/addNewProduct",
    async (initialproduct) => {
        const response = await createProduct(initialproduct);
        return response.data;
    }
);


export const updateApiProduct = createAsyncThunk(
    "/products/updateApiProduct",
    async (data) => {
        const response = await updateProduct(data);
        return response.data;
    }
);



const productsSlice = createSlice({
    name: "produts",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchProducts.pending, (state, _) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "completed";
                productAdaptor.upsertMany(state, action.payload);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addNewProduct.fulfilled, productAdaptor.addOne)
            .addCase(deleteApiProduct.fulfilled, (state, action) => {
                productAdaptor.removeOne(state, action.payload);
            })
            .addCase(updateApiProduct.fulfilled, (state, action) => {
                productAdaptor.updateOne(state, action.payload);
            });


    },
});


export const {
    selectAll,
    selectById,
    selectIds,
} = productAdaptor.getSelectors((state) => state.products);


export default productsSlice.reducer;