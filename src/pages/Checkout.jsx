import React from "react";
import { useCart } from "../Context/Cartcontext";
import Navbar from "../shared components/Navbar";
import Button from "../shared components/Button";

function Checkout() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <Navbar />
      <div className="ml-2 mt-3">
        <Button />
      </div>
      <div className="mx-auto max-w-3xl px-4 md:px-16 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <h3 className="text-center"><i>Empty Cart</i></h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4 gap-4"
              >
                <img
                  src={item.image}
                  alt={item.color}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm md:text-base">{item.color}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
                </div>
                <div className="text-center text-sm md:text-base">
                  <p>Qty: {item.quantity}</p>
                  <p>₦{item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-800 font-bold text-sm md:text-base shrink-0"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 text-xl font-bold">
              <span>Total</span>
              <span>₦{totalPrice}</span>
            </div>

            <button className="mt-6 bg-red-800 text-white px-8 py-3 rounded-lg w-full mb-10">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Checkout;