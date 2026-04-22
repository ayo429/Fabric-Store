import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared components/Navbar";
import Searchbutton from "../shared components/Searchbutton";
import { Jmfabrics } from "../Data/Jmfabrics";
import Navigation from "../shared components/Navigation";
import { useProductSearch } from "../shared components/Hook";

function Products2() {
  const { searchProducts, setSearchProducts, filteredProducts } =
    useProductSearch(Jmfabrics);

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="pb-10">
        {/* Top bar */}
        <div className="flex justify-end items-center px-4 md:px-8 py-3">
          <div className="search w-1/2 md:w-1/3">
            <Searchbutton
              searchProducts={searchProducts}
              setSearchProducts={setSearchProducts}
            />
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-center items-center bg-red-800 w-full">
          <h2 className="animate-loop text-2xl md:text-4xl text-center text-white font-bold py-2">
            Jamau Fabrics
          </h2>
        </div>

        {/* Product grid */}
        <div className="px-4 md:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center py-16">
                <p className="text-xl md:text-2xl font-bold">
                  No products found
                </p>
                <p className="text-gray-500 mt-2 text-sm md:text-base text-center">
                  Try searching for a different color or description
                </p>
              </div>
            ) : (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="card flex flex-col gap-2 items-center justify-center py-4 px-3 rounded-lg"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  <img
                    src={item.image}
                    alt={item.color}
                    className="w-full h-36 md:h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-sm md:text-lg font-extrabold mt-2 text-center">
                    {item.color}
                  </h3>
                  <p className="text-gray-600 mt-1 text-center text-xs md:text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <Link
                      to={`/Products2/${item.id}`}
                      key={item.id}
                      className="w-full"
                    >
                      <button className="w-full inline-flex items-center justify-center btn-hover-effect px-4 py-2 font-sans font-semibold tracking-wide text-white bg-red-800 rounded-lg text-sm md:text-base">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="py-6">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Products2;
