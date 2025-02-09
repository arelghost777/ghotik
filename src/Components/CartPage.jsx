import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm'; 

const CartPage = () => {
  const { cartProducts, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold my-20">Checkout</h1>
      {cartProducts.length > 0 ? (
        <>
          <div className='relative space-y-5'>
            <div className='max-w-md'>
              <Cart
                cartproducts={cartProducts}
                removeFromCart={removeFromCart}
                totalPrice={totalPrice}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </div>
            <div className='md:absolute top-0 end-0'>
              <CheckoutForm />
            </div>
          </div>
        </>
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