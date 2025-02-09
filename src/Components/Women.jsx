import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Products from './Products';
import Loading from './Loading';
import FailToConnect from './FailToConnect';
import useProducts from './hooks/useProducts';

function Women() {
  const { addToCart } = useContext(CartContext);
  const { products, error, loading } = useProducts("products/category/women's clothing");

  const retryFetch = () => {
    window.location.reload(); // Recharge la page pour réessayer
  };

  return (
    <main className="my-5 px-3">
      <h1 className="w-50 mb-5 text-2xl font-medium border-b-4 border-black p-3">
        Women's Clothing
      </h1>
      <section>
        {loading ? (
          <Loading />
        ) : error ? (
          <FailToConnect fetchData={retryFetch} />
        ) : (
          <Products products={products} addToCart={addToCart} />
       )}
      </section>
    </main>
 );
}
export default Women;