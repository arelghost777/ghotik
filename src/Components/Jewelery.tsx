// src/components/Electronics.js
import Products from './Products';
import Loading from './Loading';
import FailToConnect from './FailToConnect';
import useProducts from './hooks/useProducts';
import { useCart } from './hooks/useCart';

function Jewelery() {
  const { addToCart } = useCart();
  const { products, error, loading } = useProducts('products/category/jewelery');

  const retryFetch = () => {
    window.location.reload(); // Recharge la page pour réessayer
  };

  return (
    <main className="my-5 px-3">
      <h1 className="w-50 mb-5 text-2xl font-medium border-b-4 border-black p-3">
        Jewelery
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
export default Jewelery;