// src/hooks/useProducts.js
import { useState, useEffect } from 'react';

const useProducts = (category: string) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/${category}`,
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else if (typeof error === "string") {
          setError(error);
        } else {
          setError("Erreur inconnue");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { products, error, loading };
};

export default useProducts;