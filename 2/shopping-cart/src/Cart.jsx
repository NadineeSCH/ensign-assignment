// import { useState, useEffect } from "react";
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// export default function Cart({cartItems, isOpen, onClose}) {
//   // get cart items from context or localStorage
//   if (!isOpen){
//     return null; // If cart is not open, don't render anything
//   }

//   console.log("Current cart items, printed from cart:", cartItems); //debug

//   // return (
//   //   <div className="p-8">
//   //     <h1 className="text-xl font-semibold mb-4">Your Cart</h1>

//   //     {/* Quantity adjuster, remove button, total price */}
//   //   </div>
//   // );

// }

"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart({
  cartItems,
  isOpen,
  onClose,
  onRemove,
  onUpdateQuantity,
}) {
  function calculateTotalPrice() {
    let total = 0;
    for (const { product, quantity } of cartItems) {
      total += product.price * quantity;
    }
    return total.toFixed(2); // return total price, rounded to 2 decimal places
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={onClose}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartItems.map(({ product, quantity }) => (
                            <li key={product.id} className="flex py-6">
                              {/* Product image */}
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.description}
                                  src={product.image}
                                  className="size-full object-cover"
                                />
                              </div>

                              {/* Product details */}
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <Link
                                        to={`/product/${product.id}`}
                                        onClick={onClose}
                                      >
                                        {product.title}
                                      </Link>
                                    </h3>
                                    <p className="ml-4">
                                      ${(product.price * quantity).toFixed(2)}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p>
                                </div>

                                {/* Quantity controls */}
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onUpdateQuantity(
                                          product.id,
                                          quantity - 1
                                        )
                                      }
                                      className="px-2 py-1 border rounded-l-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                    >
                                      -
                                    </button>
                                    <span className="px-3 py-1 border-t border-b text-center">
                                      {quantity}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onUpdateQuantity(
                                          product.id,
                                          quantity + 1
                                        )
                                      }
                                      className="px-2 py-1 border rounded-r-md text-gray-600 hover:bg-gray-100"
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* Remove button */}
                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() => onRemove(product.id)}
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{"$" + calculateTotalPrice()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={onClose}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
