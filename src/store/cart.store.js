const KEY = "cart";

export const getCart = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const addToCart = (product) => {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem(KEY, JSON.stringify(cart));
};

export const removefromCart = (productId) => {
  const cart = getCart();
  const newCart = cart.filter((product) => product.id != productId);

  console.log(newCart);

  localStorage.setItem(KEY, JSON.stringify(newCart));
};
