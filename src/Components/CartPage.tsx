import Cart from './Cart';
import CheckoutForm from './CheckoutForm';
import { useCart } from './hooks/useCart';

const CartPage = () => {
  const { cartProducts } = useCart();

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold my-20">Checkout</h1>
      {cartProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-10">
          <Cart/>
          <CheckoutForm />
        </div>
      ) : (
        <div className="shadow-sm rounded flex items-center justify-center p-10 mt-5">
          <h2 className="text-center font-medium text-xl">
            Your cart is empty. Please add something.
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
