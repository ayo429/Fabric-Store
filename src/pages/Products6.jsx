import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared components/Navbar";
import Button from "../shared components/button";
import Searchbutton from "../shared components/Searchbutton";
import { Vintages } from "../Data/Vintages";
import { useProductSearch } from "../shared components/Hook";
import { useNavigate } from "react-router-dom";
function Products6() {
  const { searchProducts, setSearchProducts, filteredProducts } =
    useProductSearch(Vintages);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Products5");
  };
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="pb-16">
        <div className="upper flex justify-end items-center py-3 px-4">
          <div className="search">
            <Searchbutton
              searchProducts={searchProducts}
              setSearchProducts={setSearchProducts}
            />
          </div>
        </div>
          <div className="header flex justify-center items-center bg-red-800 w-full py-2">
            <h2 className="animate-loop text-4xl text-center text-white font-bold">
              Vintages
            </h2>
          </div>
          <div className="section flex flex-col justify-center items-center">
            <div className="jonkoso flex flex-col flex-wrap px-4">
              <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* No results message */}
                {filteredProducts.length === 0 ? (
                  <div className="col-span-4 flex flex-col items-center justify-center py-16 w-full">
                    <p className="text-2xl font-bold">No products found</p>
                    <p className="text-gray-500 mt-2">
                      Try searching for a different color or description
                    </p>
                  </div>
                ) : (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      className="card flex flex-col gap-2 items-center justify-center m-2 py-4 px-3 rounded-lg"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <img
                        src={item.image}
                        alt={item.color}
                        className="w-45 h-45 object-cover"
                      />
                      <h3 className="text-lg font-extrabold mt-2 text-center">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-1 text-center">
                        {item.description}
                      </p>
                      <div className="button flex flex-col items-center gap-2">
                        <Link to={`/Products6/${item.id}`} key={item.id}>
                          <button className="inline-flex items-center justify-center btn-hover-effect px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-800 rounded-lg h-8">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        <div className="prev flex justify-center">
          <div>
            <button
              className="inline-flex items-center justify-center px-8 py-1 font-sans font-semibold text-white bg-red-800 rounded-lg btn-hover-effect"
              onClick={handleClick}
            >
              Previous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products6;
