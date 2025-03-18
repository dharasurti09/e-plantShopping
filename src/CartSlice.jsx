
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const plantToReplace = state.items.find(item => item.name === plant.name);
      if (plantToReplace) {
        plantToReplace.quantity += 1
        return {...state};
      } else {
        return {
            ...state,
            items: [...state.items, {...plant, quantity: 1}]
          };
      }
    },
    removeItem: (state, action) => {
      const plantToRemove = action.payload;
      return {
        ...state,
        items: state.items.filter(plant => plant.name !== plantToRemove.name)
      };
    },
    updateQuantity: (state, action) => {
      const {plant, quantity} = action.payload;
      return {
        ...state,
        items: [...state.items.filter(item => item.name !== plant.name), {...plant, quantity: quantity}]
      };
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
