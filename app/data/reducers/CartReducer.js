import {
    CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_CLEAR
} from '../actions/CartActions';

export const initialState = {
    cartList: [],
    selectedProduct: null
}

export const cartReducer = (cart = initialState, action) => {
    switch (cart.type) {
        case CART_ADD_PRODUCT:
            return { ...cart, cartList: [...cart.product, action.value] }
        case CART_REMOVE_PRODUCT:
            var _v = cart.product.filter((val) => val !== action.value)
            return { ...cart, cartList: _v }
        case CART_CLEAR:
            return { ...cart, cartList: [] }
        default:
            break;
    }
}