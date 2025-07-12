//add an item to cart, add to the previous quantity
export function addToCart(prevItems, product, quantity) {
  const existingItem = prevItems.find(item => item.product.id === product.id);
  if (existingItem) {
    return prevItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    return [...prevItems, { product: product, quantity: quantity }];
  }
}

// Remove an item from the cart
export function removeFromCart(prevItems, productId) {
  return prevItems.filter(item => item.product.id !== productId);
}

// Set the quantity of an item in the cart
export function updateQuantity(prevItems, productId, quantity) {
  if (quantity === 0) {
    return removeFromCart(prevItems, productId);
  } else {
    return prevItems.map(item =>
      item.product.id === productId
        ? { ...item, quantity: quantity }
        : item
    );
  }
}
