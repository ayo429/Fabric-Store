import { useCart } from '../Context/CartContext';

function ProductDetail({ data }) {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <>
      <img src={product.image} alt={product.color} />
      <h2>{product.color}</h2>
      <p>{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-800 text-white px-6 py-2 rounded-lg">
        Add to Cart
      </button>
    </>
  );
}
