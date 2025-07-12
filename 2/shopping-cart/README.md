Ensign Assignment Part 2 - React Shopping App
==================

A minimal and modern shopping product details page built with React, Tailwind CSS, Headlessui and Heroicons, with core features including:

- Product information display
- Star rating visualization
- Quantity selector (+ / -)
- "Add to Cart" functionality
- Notification pop-up ("Added to cart!")

----------------------------------------
General Description
----------------------------------------

This is a simple React app that demonstrates how to build a single-product detail view with modern UI/UX practices. It includes reusable components, clean state management, and live quantity updates.

Main Features:
- Responsive layout using Tailwind CSS
- Visual star-based rating system (with partial fill support)
- Cart logic using local React state
- Quantity increment/decrement buttons
- Feedback notification when items are added to the cart

----------------------------------------
Design Decisions
----------------------------------------

💅 Styling:
- Tailwind CSS is used for utility-first styling.
- Flex/grid utilities enable responsiveness with minimal code.
- Icons from heroicons and dialogs from headlessui simplifies the design process and adds to the user experience

🧠 State Management:
- React `useState` for managing `cartItems` and `quantity`.

🔔 Notifications:
- A custom popup component (`Notification`) shows a confirmation when an item is added to the cart.
- It auto-dismisses after a short duration using `setTimeout`.

🌟 Star Rating:
- Overlayed filled stars on empty stars.
- Uses `fillPercent` to display partially filled stars accurately.

----------------------------------------
Getting Started
----------------------------------------

1. Clone the repository:
   git clone https://github.com/NadineeSCH/ensign-assignment.git
   cd ensign-assignment/2/shopping-cart

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

Then open http://localhost:5173/ in your browser.


----------------------------------------
Testing
----------------------------------------
Vitest is used since it can work seamlessly with Vite.

To test, run:
npm test

----------------------------------------
Folder Structure
----------------------------------------

src/
├── assets/            --> Images like logo.png
├── components/        --> UI pages (ProductsPage, ProductDetails, Cart) and components (Notification, Navbar, Product)
├── test/              --> Unit tests
├── api/               --> API call functions
├── utils/             --> Utility functions like addToCart()
├── App.jsx
├── main.jsx

----------------------------------------
Technologies Used
----------------------------------------

- React
- Tailwind CSS
- Heroicons
- Headlessui
- Vite
- Vitest, React Testing Library

----------------------------------------
Author
----------------------------------------

Made by Nadine V
