import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { cartProducts } = useContext(CartContext);

  // Couleur dynamique pour le badge
  const badgeColor = cartProducts.length > 3 ? 'bg-red-500' : 'bg-orange-500';

  return (
    <nav className="fixed top-0 right-0 left-0 bg-black text-white z-20">
      <div className="bg-none flex items-center flex-row px-2 py-4">
        {/* Nom du site sans logo */}
        <div className="basis-1/3 sm:basis-1/2">
          <Link to="/" className="font-bold">GHOTIK</Link>
        </div>

        {/* Liens de navigation sans la classe nav-item */}
        <div className="basis-2/3 sm:basis-1/2 flex justify-around font-medium">
          <Link
            to="/"
            className="border-b-2 border-sky-400 inline-block text-sky-400 hover:text-indigo-600 active:scale-110"
            aria-label="Home"
          >
            Home <i className="fa-solid fa-house"></i>
          </Link>
          <Link
            to="/shop/allproducts"
            className="inline-block hover:text-indigo-600 active:scale-110"
            aria-label="Shop"
          >
            Shop <i className="fa-solid fa-shop"></i>
          </Link>
          {/* Cart avec badge fixé à l'icône */}
          <Link to="/cart" className="relative flex items-center hover:text-indigo-600 active:scale-110" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cartProducts.length > 0 && (
              <span className={`absolute -top-2 -right-2 ${badgeColor} text-white rounded-full px-2 py-1 text-xs`}>
                {cartProducts.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}