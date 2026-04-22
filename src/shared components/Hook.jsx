// hooks/useProductSearch.js
import { useState } from 'react';

export function useProductSearch(data = []) {
  const [searchProducts, setSearchProducts] = useState("");

  const filteredProducts = data.filter((product) =>
    product.name?.toLowerCase().includes(searchProducts.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchProducts.toLowerCase()) ||
    product.color?.toLowerCase().includes(searchProducts.toLowerCase()) ||
    product.price?.toString().toLowerCase().includes(searchProducts.toLowerCase())
  );


  return { searchProducts, setSearchProducts, filteredProducts };
}
