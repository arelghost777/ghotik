import { createContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number; // ➕ ajouté manuellement
}

export interface CartContextType {
  cartProducts: Product[];
  addToCart: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  // 🔄 Charger le panier depuis FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          // Récupérer les détails complets des produits
          Promise.all(
            data.products.map((item: { productId: number; quantity: number; }) =>
              fetch(`https://fakestoreapi.com/products/${item.productId}`)
                .then(res => res.json())
                .then(product => ({ ...product, quantity: item.quantity })) // Ajouter la quantité
            )
          )
          .then(setCartProducts)
          .catch(() => toast.error("Erreur lors du chargement des détails des produits."));
        }
      })
      .catch(() => toast.error("Erreur lors du chargement du panier."));
  }, []);

  // ➕ Ajouter un produit au panier
  const addToCart = async (product: { id: number; }) => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    let updatedCart : Product[];
    if (existingProduct) {
      updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      toast.info("🔼 Quantité augmentée.");
    } else {
      updatedCart =[...cartProducts, { ...product, quantity: 1 } as Product];
      toast.success('Ajouté avec succès', {
        description: 'Le produit a été ajouté à votre panier.',
      });
    }

    // Mettre à jour l'état local et l'API
    setCartProducts(updatedCart);
    await updateCartAPI(updatedCart);
  };

  // 🔼 Augmenter la quantité d'un produit
  const increaseQuantity = async (productId : number) => {
    const updatedCart = cartProducts.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartProducts(updatedCart);
    await updateCartAPI(updatedCart);
  };

  // 🔽 Diminuer la quantité ou supprimer un produit
  const decreaseQuantity = async (productId : number) => {
    const updatedCart = cartProducts
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    setCartProducts(updatedCart);
    await updateCartAPI(updatedCart);
  };

  // ❌ Supprimer un produit
  const removeFromCart = async (productId : number) => {
    const updatedCart = cartProducts.filter((item) => item.id !== productId);
    setCartProducts(updatedCart);
    await updateCartAPI(updatedCart);
    toast.error("🗑 Produit retiré.");
  };

  // 🔄 Mettre à jour FakeStoreAPI
  const updateCartAPI = async (updatedCart: { id: number; quantity: number; }[]) => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: updatedCart.map(({ id, quantity }) => ({
            productId: id,
            quantity,
          })),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du panier.");
      }
    } catch (error) {
      toast.error("⚠️ Erreur lors de la mise à jour du panier.");
    }
  };

  // 🛒 Calculer le prix total
  const totalPrice = cartProducts.reduce((total, item) => total + (item.price || 0 * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};