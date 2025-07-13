import { Link } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import { Home, ShoppingCart, Store } from 'lucide-react';
import { useMemo } from 'react';


export default function Navbar() {
  const navbarItems = useMemo(()=>[
    {
      title: "Home",
      icon: Home,
      url: "/"
    },
    {
      title: "Store",
      icon: Store,
      url: "/shop/allproducts"
    },
    {
      title: "Cart",
      icon: ShoppingCart,
      url: "/cart"
    }
  ],[])
  const { cartProducts } = useCart();

  // Couleur dynamique pour le badge
  const badgeColor = cartProducts.length > 3 ? 'bg-red-500' : 'bg-orange-500';

  return (
    <nav className="fixed top-0 right-0 left-0 bg-gray-900 text-white z-20">
      <div className="flex px-2 py-4">
        {/* Nom du site sans logo */}
        <div className="basis-1/3 sm:basis-1/2">
          <Link to="/" className=""><span className='font-bold text-lg font-serif text-white'>GHOTIK</span></Link>
        </div>

        {/* Liens de navigation sans la classe nav-item */}
        <div className="basis-2/3 sm:basis-1/2 flex justify-around font-medium">
          {navbarItems.map((item, index)=>(
            <Link
            key={index}
            to={item.url}
            className={item.title==="Cart"? `relative flex items-center hover:text-indigo-600 active:scale-110`:`border-sky-400 inline-block text-red-400 hover:text-indigo-600 active:scale-110`}
            aria-label={item.title}
          >
            {item.title==="Cart" && cartProducts.length > 0 && (
              <span className={`absolute -top-2 -right-2 ${badgeColor} text-white rounded-full px-2 py-1 text-xs`}>
                {cartProducts.length}
              </span>
            )}
            <item.icon/>
          </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}