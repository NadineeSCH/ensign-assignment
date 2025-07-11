import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Required for Link components
import Cart from "../components/Cart";
import "@testing-library/jest-dom";

const mockCartItems = [
  {
    product: {
      id: 1,
      title: "Test Product 1",
      price: 10.99,
      description: "Test description 1",
      image: "test-image1.jpg",
      color: "Red",
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      title: "Test Product 2",
      price: 15.99,
      description: "Test description 2",
      image: "test-image2.jpg",
      color: "Blue",
    },
    quantity: 1,
  },
];

// Custom render function with router context
const renderCart = (props = {}) => {
  const defaultProps = {
    cartItems: [],
    isOpen: true,
    onClose: vi.fn(),
    onRemove: vi.fn(),
    onUpdateQuantity: vi.fn(),
    ...props,
  };

  return render(
    <MemoryRouter>
      <Cart {...defaultProps} />
    </MemoryRouter>
  );
};

describe("Cart Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders empty cart message when no items", () => {
    renderCart({ cartItems: [] });

    expect(screen.getByText("Shopping cart")).toBeInTheDocument();
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  test("renders cart items correctly", () => {
    renderCart({ cartItems: mockCartItems });

    expect(screen.getByText("Test Product 1")).toBeInTheDocument();
    expect(screen.getByText("Test Product 2")).toBeInTheDocument();
    expect(screen.getByText("$21.98")).toBeInTheDocument(); // 10.99 * 2
    expect(screen.getByText("$15.99")).toBeInTheDocument();
    expect(screen.getByText("$37.97")).toBeInTheDocument(); // Total
  });

  test("calls onRemove when remove button is clicked", () => {
    const mockOnRemove = vi.fn();
    renderCart({ cartItems: mockCartItems, onRemove: mockOnRemove });

    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);

    expect(mockOnRemove).toHaveBeenCalledWith(1);
  });

  test("quantity controls work correctly", () => {
    const mockOnUpdateQuantity = vi.fn();
    renderCart({
      cartItems: mockCartItems,
      onUpdateQuantity: mockOnUpdateQuantity,
    });

    const incrementButtons = screen.getAllByText("+");
    const decrementButtons = screen.getAllByText("-");

    // Test increment
    fireEvent.click(incrementButtons[0]);
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith(1, 3);

    // Test decrement
    fireEvent.click(decrementButtons[0]);
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith(1, 1);
  });

  test("calculates total price correctly", () => {
    renderCart({ cartItems: mockCartItems });
    expect(screen.getByText("$37.97")).toBeInTheDocument();
  });

  test("closes when close button is clicked", () => {
    const mockOnClose = vi.fn();
    renderCart({ onClose: mockOnClose });

    const closeButtonX = screen.getByRole("button", { name: /close panel/i });
    const closeButtonContinue = screen.getByRole("button", {
      name: /continue shopping/i,
    });
    fireEvent.click(closeButtonX);
    fireEvent.click(closeButtonContinue);
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  test("product links contain correct URLs", () => {
    renderCart({ cartItems: mockCartItems });

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/product/1");
    expect(links[1]).toHaveAttribute("href", "/product/2");
  });
});
