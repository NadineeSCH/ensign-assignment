export function addToCart(prevItems, product) {
  const existingItem = prevItems.find(item => item.product.id === product.id);
  if (existingItem) {
    return prevItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...prevItems, { product: product, quantity: 1 }];
  }
}

export function removeFromCart(prevItems, productId) {
  return prevItems.filter(item => item.product.id !== productId);
}

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
