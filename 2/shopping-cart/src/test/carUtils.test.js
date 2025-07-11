import { addToCart, removeFromCart, updateQuantity } from '../utils/cartUtils';

describe('Cart Utilities', () => {
  const sampleProduct = { id: 1, name: 'Sample Product' };

  test('adds new product to cart', () => {
    const result = addToCart([], sampleProduct);
    expect(result).toEqual([{ product: sampleProduct, quantity: 1 }]);
  });

  test('increments quantity if product exists', () => {
    const initialCart = [{ product: sampleProduct, quantity: 1 }];
    const result = addToCart(initialCart, sampleProduct);
    expect(result[0].quantity).toBe(2);
  });

  test('removes product from cart', () => {
    const initialCart = [{ product: sampleProduct, quantity: 1 }];
    const result = removeFromCart(initialCart, 1);
    expect(result).toEqual([]);
  });

  test('updates quantity to a specific value', () => {
    const initialCart = [{ product: sampleProduct, quantity: 1 }];
    const result = updateQuantity(initialCart, 1, 3);
    expect(result[0].quantity).toBe(3);
  });

  test('removes item if quantity is set to 0', () => {
    const initialCart = [{ product: sampleProduct, quantity: 1 }];
    const result = updateQuantity(initialCart, 1, 0);
    expect(result).toEqual([]);
  });
});
