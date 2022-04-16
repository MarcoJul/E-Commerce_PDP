import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.title === newItem.title);
      if (!existingItem) {
        state.items.push({
          id: Math.random(),
          key: Math.random(),
          title: "Fall Limited Edition Sneakers",
          img: "/images/image-product-1-thumbnail.jpg",
          price: "125.00",
          quantity: newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price;
      }
      state.totalAmount += newItem.price;
      state.totalQuantity += newItem.quantity;
    },
    removeItemToCart(state, action) {
      const title = action.payload;
      // const existingItem = state.items.find((item) => item.title === title);
      // if (existingItem.quantity === 1) {
      state.items = state.items.filter((item) => item.title !== title);
      // } else {
      //   existingItem.quantity--;
      //   existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      // }
      // state.totalQuantity--;
      // state.totalAmount = state.totalAmount - existingItem.price;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
