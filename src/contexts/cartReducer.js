export const initialState = {
  items: [],
  totalItems: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1,
      };
    }

    case 'REMOVE_FROM_CART': {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      if (!itemToRemove) return state;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
      };
    }

    case 'UPDATE_QUANTITY': {
      const oldItem = state.items.find((item) => item.id === action.payload.id);
      if (!oldItem) return state;
      const quantityDiff = action.payload.quantity - oldItem.quantity;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        totalItems: state.totalItems + quantityDiff,
      };
    }

    case 'CLEAR_CART': {
      return {
        items: [],
        totalItems: 0,
      };
    }

    default:
      return state;
  }
};

export const calculateCartTotal = (state) => {
  return state.items.reduce((total, item) => {
    const price = parseFloat(String(item.preco).replace('R$ ', '').replace(',', '.'));
    return total + price * item.quantity;
  }, 0);
};
