import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingProduct.id
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...product, cartQuantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ),
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        ).filter((item) => item.cartQuantity > 0), // Remove items with zero quantity
      };
    default:
      return state;
  }
};

export default cartReducer;
