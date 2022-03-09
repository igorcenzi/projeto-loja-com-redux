import { refreshCart } from "./actions";

const increment = (state, product) => {
  const newState = state.map((prod) =>
    prod.name === product.name ? { ...prod, quantity: prod.quantity + 1 } : prod
  );
  return [...newState];
};

const removeItem = (state, index) => {
  console.log("removeu");
  return [...state.filter((prod, ind) => ind !== index)];
};

export const addCartThunk = (product, cart) => (dispatch) => {
  if (cart.filter((prod) => prod.name === product.name).length === 0) {
    product.quantity = 1;
    localStorage.setItem("@cart", JSON.stringify([...cart, product]));
    dispatch(refreshCart([...cart, product]));
  } else {
    console.log("incremento");
    localStorage.setItem(
      "@cart",
      JSON.stringify([...increment(cart, product)])
    );
    dispatch(refreshCart([...increment(cart, product)]));
  }
};

export const incrementItemThunk = (product, cart) => (dispatch) => {
  console.log("incremento");
  localStorage.setItem("@cart", JSON.stringify([...increment(cart, product)]));
  dispatch(refreshCart([...increment(cart, product)]));
};

export const decrementItemThunk = (product, cart) => (dispatch) => {
  const index = cart.findIndex((prod) => prod.name === product.name);
  console.log(index);
  if (cart[index]?.quantity === 1) {
    localStorage.setItem("@cart", JSON.stringify([...removeItem(cart, index)]));
    dispatch(refreshCart([...removeItem(cart, index)]));
  } else {
    const newState = [
      ...cart.map((prod, index) =>
        prod.name === product.name
          ? prod.quantity === 1
            ? removeItem(cart, product)
            : { ...prod, quantity: prod.quantity - 1 }
          : prod
      ),
    ];
    localStorage.setItem("@cart", JSON.stringify([...newState]));
    dispatch(refreshCart([...newState]));
  }
};

export const removeAllThunk = () => (dispatch) => {
  localStorage.clear();
  dispatch(refreshCart([]));
};

export const removeProductThunk = (product, cart) => (dispatch) => {
  const index = cart.findIndex((prod) => prod.name === product.name);
  localStorage.setItem("@cart", JSON.stringify([...removeItem(cart, index)]));
  dispatch(refreshCart([...removeItem(cart, index)]));
};
