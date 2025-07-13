import electronics from '../assets/electronics.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import jewelery from '../assets/jewelery.jpg';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
interface CategoryItem {
  title: string,
  image: string,
  class: string,
  url: string
}

export default function Category(){
  const categories: CategoryItem[]= useMemo(()=> [
    {
      title:"MEN'S CLOTHES",
      image: men,
      class: "relative bg-cover bg-center p-8 col",
      url: "shop/men"
  
    },
    {
      title: "WOMEN'S CLOTHES",
      image: women,
      class: "relative bg-cover bg-center p-8 col",
      url: "shop/women"
    },
    {
      title: "JEWELERY",
      image: jewelery,
      class: "relative bg-cover bg-center p-8 md:row-span-2 col",
      url: "shop/jewelery"
    },
    {
      title: "ELECTRONICS",
      image: electronics,
      class: "relative bg-cover bg-center p-8 md:col-span-2 col",
      url: "shop/electronics"
    }
  ],[])
    return(
        <section className='px-2'>
          <div className="text-center">
            <h1 className='mt-10 mb-3 text-3xl font-semibold'>Shop By Category</h1>
            <span className="inline-block w-[100px] h-[7px] bg-black"></span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-15'>
            {categories.map((category, index)=>(
              <div key={index} style={{ backgroundImage: `url(${category.image})`}} className={category.class}>
                <div className=' inset-0'>
                    <h1 className='text-white text-3xl min-lg:text-5xl  font-medium my-5'>{category.title}</h1>
                    <Link to={category.url} className='inline-block border text-white py-1 px-4'>Shop Now</Link>
                </div>              
              </div>
            ))}
          </div>
        </section>
    )
}