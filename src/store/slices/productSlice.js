import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getMegaMenu, getProductsListing, getWishlist } from "../action/country";
const initialState = {
    categories: [],
    products: [],
    megamenu: [],
    whishlist: [],
    error: null,
    loading: false,
}

const productListingSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // categories of product in product listing page 
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //list of prtoduct getProductsListing
            .addCase(getProductsListing.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProductsListing.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsListing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get menu menu  list from backend
            .addCase(getMegaMenu.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMegaMenu.fulfilled, (state, action) => {
                state.loading = false;
                state.megamenu = action.payload;
            })
            .addCase(getMegaMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //get whishlist data from backend
            .addCase(getWishlist.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.whishlist = action.payload;
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default productListingSlice.reducer