import {ShoppingBagIcon} from '@heroicons/react/24/outline'

export default function Navbar({openCart,numItems}) {

    function handleCartClick() {
        // Logic to open the cart drawer
        console.log("Cart icon clicked"); // debug
        openCart();
    }

return (
    <header className="fixed top-0 z-40 w-full bg-gray-50/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Title/Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-900">Shopify</h1>
        </div>

        {/* Shopping Cart */}
        <div className="ml-4 flow-root">
          <button onClick= {handleCartClick} className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              aria-hidden="true"
              className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-700"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{numItems}</span>
            <span className="sr-only">items in cart</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
