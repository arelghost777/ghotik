export default function Products({products, addToCart}){
  
  return(
            <ul className="flex flex-row flex-wrap items-center justify-center">
              {products.map((product) => (
                <li className="shadow p-3 space-y-3 m-5 sm:max-w-[40%]" key={product.id}>
                  <div className="flex justify-center mb-5r">
                      <img
                        className="max-w-[100%] h-50"
                        src={product.image}
                        alt={product.title}
                      />
                   </div>
                    <h5 className="line-clamp-1 font-medium">
                      {product.title}
                    </h5>
                    <p className="font-extralight">{product.category}</p>
                    <p className="font-light line-clamp-2">{product.description}</p>
                      <p className="font-medium">${product.price}</p>
                    <p className="">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="font-bold px-5 py-2 bg-black text-white active:bg-none active:text-black active:bg-gray-700"
                    >
                      Add to cart <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </li>
              ))}
            </ul>
    )
}