import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

export default function Cart() {
  const { cartProducts, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="shadow-sm rounded p-5">
      <table className="table-auto w-full">
        <thead>
          <tr><th>Shopping Cart</th></tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr className="border-y border-gray-200" key={product.id}>
              <td className="py-3 space-y-2">
                <img className="max-w-[100px] h-auto" src={product.image} alt={product.title} />
                <div>
                  <h5>{product.title.slice(0, 15)}...</h5>
                  <span className="flex items-center space-x-2">
                    <button className="bg-gray-400 rounded px-2" onClick={() => decreaseQuantity(product.id)}><i className="fa-solid fa-minus text-white"></i></button>
                    <input value={product.quantity} readOnly className="w-[40px] text-center" />
                    <button className="bg-gray-600 rounded px-2" onClick={() => increaseQuantity(product.id)}><i className="fa-solid fa-add text-white"></i></button>
                  </span>
                </div>
              </td>
              <td>${product.price}</td>
              <td>
                <button className="text-gray-200" onClick={() => removeFromCart(product.id)}><i className="fa-solid fa-xmark text-gray-500 text-2xl"></i></button>
              </td>
            </tr>
          ))}
          <tr className=''>
            <td className="text-lg font-bold">Total</td>
            <td className="text-lg font-bold py-3">${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}