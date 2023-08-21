import { createSlice } from "@reduxjs/toolkit";
import fetcher from "~/api/fetcher";
import config from "~/config";

const initialState = {
	products: [],
};

export const productListSlice = createSlice({
	name: "productList",
	initialState,
	reducers: {
		getProducts: (state, action) => {
			state.products = action.payload;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { getProducts } = productListSlice.actions;
export const selectProductList = (state) => state.products;

export const getProductList = () => async (dispatch) => {
	try {
		const res = await fetcher(config.api.products);
		dispatch(getProducts(res.data));
	} catch (e) {
		console.log(e);
	}
};

export default productListSlice.reducer;
