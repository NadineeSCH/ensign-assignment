import {ShoppingBagIcon} from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar({openCart,numItems}) {

    function handleCartClick() {
        // Logic to open the cart drawer
        openCart();
    }

return (
    <header className="fixed mb-10 top-0 z-40 w-full bg-gray-50/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Title/Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex align-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
          <div>
          <h1 className="text-2xl font-semibold text-gray-900 hover:text-gray-500">OneClick</h1>
          <p className="text-xs/3 "> your go-to online store.</p>
          </div>
          </Link>
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
