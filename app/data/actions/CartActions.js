export const CART_REQUEST = 'CART_REQUEST';
export const CART_RESPONSE = 'CART_RESPONSE';
export const CART_SELECT = 'CART_SELECT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export const CART_CLEAR = 'CART_CLEAR';
export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';

export const cartRequest = () => ({
    type: CART_REQUEST
})

export const cartsResponse = (value) => ({
    type: CART_RESPONSE,
    value
})

// add new value to cart
export const cartAddProduct = (value) => ({
    type: CART_ADD_PRODUCT,
    value
})

// get te values
export const cartsSelect = (value) => ({
    type: CART_SELECT,
    value
})

// clear unique value
export const cartRemoveProduct = (value) => ({
    type: CART_REMOVE_PRODUCT,
    value
})

// clear all
export const clearCart = () => ({
    type: CART_CLEAR
})