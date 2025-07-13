import type {Product} from '@/CartContext'
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingBasket, Star, StarHalfIcon, StarIcon, StarOff } from 'lucide-react';

interface ProductsProps {
  products: Product[];
  addToCart: (product: Product) => void;
}
export default function Products({products, addToCart}:ProductsProps){
  
  return(
            <ul className="flex flex-row flex-wrap items-center justify-center">
              {products.map((product) => (
                  <Card key={product.id} className='shadow p-3 m-5 sm:max-w-[40%]'>
                    <CardHeader className="flex justify-center">
                      <img
                        className="max-w-[100%] h-50"
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                      />
                   </CardHeader>
                    <CardTitle className="line-clamp-1">
                      {product.title}
                    </CardTitle>
                    <p className="font-extralight">{product.category}</p>
                   <Separator/>
                    <CardDescription className=' line-clamp-2'>
                      {product.description}
                    </CardDescription>
                    <CardContent>
                      <p className="font-bold text-2xl text-red-600 font-serif">${product.price}</p>
                      <p className="flex gap-1 text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => {
                          const ratingValue = product.rating.rate;
                          if (ratingValue >= i + 1) {
                            return <StarIcon key={i} className="h-5" fill="currentColor" stroke="none" />;
                          } else if (ratingValue >= i + 0.5) {
                            return <StarHalfIcon key={i} className="h-5" fill="currentColor" stroke="none"/>;
                          } else {
                            return <StarIcon key={i} className="h-5" strokeWidth={1}/>;
                          }
                        })}
                      </p>
                    </CardContent>
                    <CardAction>
                      <Button
                        size="lg"
                        variant="default"
                        onClick={() => addToCart(product)}
                        className='text-white'
                      >
                        Add to cart <ShoppingBasket/>
                      </Button>
                    </CardAction>
                  </Card>
              ))}
            </ul>
    )
}