import { MinusCircle, PlusCircle, X } from 'lucide-react';
import { useCart } from './hooks/useCart';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { cartProducts, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart()

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
                    <Button variant="outline" onClick={() => decreaseQuantity(product.id)}><MinusCircle className='text-white h-5'/></Button>
                    <input value={product.quantity} readOnly className="w-[40px] text-center" />
                    <Button variant="secondary" className="bg-gray-600 rounded px-1" onClick={() => increaseQuantity(product.id)}><PlusCircle className='text-white h-5'/></Button>
                  </span>
                </div>
              </td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => removeFromCart(product.id)}><X className='h-5 text-white'/></button>
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