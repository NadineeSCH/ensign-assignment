import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDetailsApi } from "../api";
import { StarIcon } from "@heroicons/react/20/solid";
import Notification from "./Notification";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails({ onCartUpdate}) {
  const { id } = useParams(); //fetch from url params

  const [detail, setDetail] = useState({});

  const [showPopup, setShowPopup] = useState(false);


  async function fetchDetails() {
    let data = await fetchDetailsApi(id);
    setDetail(data);
  }

  function handleClick() {
    onCartUpdate(detail);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // 2 seconds
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  //debugging rerendering


  return (
    <div className="bg-white pt-20 flex justify-center">
      {/* {showPopup && (
        <div className="fixed top-4 right-4 z-50 rounded bg-green-500 px-4 py-2 text-white shadow-lg transition-opacity">
          Added to cart!
        </div>
      )} */}
      <Notification message="Added to cart" visible={showPopup} />
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <img src={detail.image} className="rounded-lg object-contain" />
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {detail.title}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="mt-2 text-3xl tracking-tight text-gray-900">
            ${detail.price}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => {
                  // Calculate how much of this star should be filled: 0 to 1
                  const fillPercent = Math.min(
                    Math.max(detail?.rating?.rate - (star - 1), 0),
                    1
                  );

                  return (
                    <div key={star} className="relative size-5 shrink-0 mr-0.5">
                      {/* Gray star background */}
                      <StarIcon
                        className="text-gray-200 absolute top-0 left-0"
                        aria-hidden="true"
                      />
                      {/* Filled star on top, clipped by fillPercent */}
                      <StarIcon
                        className="text-gray-900 relative"
                        aria-hidden="true"
                        style={{
                          overflow: "hidden",
                          clipPath: `inset(0 ${100 - fillPercent * 100}% 0 0)`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="sr-only">{detail?.rating?.rate} out of 5 stars</p>
              <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {detail?.rating?.count || "N/A"} reviews
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200lg:pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{detail.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <button
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
