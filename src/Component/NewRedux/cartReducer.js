import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './actions';
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
        toast.info(`Increased quantity of ${product.title} in cart!`);
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        toast.success(`${product.title} added to cart!`);
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, cartQuantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case INCREMENT_ITEM: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case DECREMENT_ITEM: {
      const updatedCartItems = state.cartItems
        .map((item) =>
          item.id === action.payload
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
