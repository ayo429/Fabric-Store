// pages/ProductsDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cmfabrics } from '../Data/Cmfabrics';
import Navbar from '../shared components/Navbar';
import { useCart } from '../Context/Cartcontext';

function Products3Details() {
  const { id } = useParams();
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();

  const product = Cmfabrics.find((item) => item.id === id);
  const cartItem = cart.find((i) => i.id === product?.id);

  if (!product) return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-bold">Product not found</p>
        <Link to="/Products3" className="mt-4 text-red-800 font-semibold underline">
          Go back
        </Link>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="contain pt-16 px-4">
        {/* Back button */}
        <div className="py-4">
          <Link to="/Products3" className="text-red-800 font-semibold">
            ← Back to Products
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
          {/* Image */}
          <div className="image">
            <img
              src={product.image}
              alt={product.color}
              className="w-80 h-80 object-cover rounded-lg"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            />
          </div>

          {/* Details */}
          <div className="details flex flex-col gap-4 max-w-md">
            <h2 className="text-3xl font-bold">{product.color}</h2>
            <p className="text-gray-600 text-lg">{product.description}</p>
            <p className="text-gray-600 text-lg">{product.price}</p>
            <p className="text-gray-600 text-lg">{product.note}</p>

            {/* Cart controls */}
            {cartItem ? (
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  -
                </button>
                <span className="font-bold text-xl">{cartItem.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-black text-white px-8 py-3 rounded-lg font-semibold w-full">
                Add to Cart
              </button>
            )}

            {/* Checkout link */}
            <Link to="/Checkout">
              <button className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold w-full">
                Go to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products3Details;