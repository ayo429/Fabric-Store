import React, { useState } from "react";
import { useCart } from "../Context/Cartcontext";
import Navbar from "../shared components/Navbar";
import Button from "../shared components/Button";
import { useAuth } from "../Context/AuthContext";

function Checkout() {
  const { cart, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity } = useCart();
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleOrder = () => {
    if (!name || !address) {
      alert('Please enter your name and delivery address');
      return;
    }

    const orderDetails = cart.map(item =>
      `• ${item.color} x${item.quantity} = ₦${item.price * item.quantity}`
    ).join('\n');

    const message = `
Hello! I just placed an order on your fabric store 🛍️

*Customer Details:*
Name: ${name}
Email: ${user ? user.email : 'Guest'}
Address: ${address}

*Order Details:*
${orderDetails}

*Total: ₦${totalPrice}*

Please confirm my order. Thank you!
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "2348124639774"; // replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

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

            {/* Customer details form */}
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="text-xl font-bold">Delivery Details</h3>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full outline-none"
              />
              <textarea
                placeholder="Your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full outline-none"
                rows={3}
              />
            </div>

            {/* WhatsApp order button */}
            <button
              onClick={handleOrder}
              className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg w-full font-semibold mb-10">
              Complete Order via WhatsApp 📲
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Checkout;