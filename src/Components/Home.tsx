import { Link } from 'react-router-dom';
import shopping from '../assets/shopping.jpg';
import shopping2 from '../assets/shopping2.jpg';
import { CreditCard, Earth, Stars, Tag } from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/card';
import ScrollingBanner from './ScrollingBanner';
import { Button } from '@/components/ui/button';
import Category from './Category';
//import "./App.css"

const Features = [
  {
    title:"Worldwide Shipping",
    icon: Earth,
    content: "Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net"

  },
  {
    title: "Best Quality",
    icon: Stars,
    content: "Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net"
  },
  {
    title: "Best offers",
    icon: Tag,
    content: "Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net"
  },
  {
    title: "Secure payments",
    icon: CreditCard,
    content: "Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net"
  }
]

function App() {
  // State


  // Comportement
  
  // Affichage
  return (
    <>
      <header style={{ backgroundImage: `url(${shopping})`}} className="relative bg-cover bg-center min-h-100 max-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-75'></div>
        <div className='p-4 z-10 relative text-center space-y-4'>
          <h1 className=' text-white text-4xl min-sm:text-7xl font-extrabold'>Discover Our Collection</h1>
          <p className=' text-lg text-gray-300'>Shop our wide range of product tailored just for you</p>
          <Link to='shop/allproducts' className='inline-block hover:scale-100 my-5 text-white'><Button variant="default" size="lg">Start Shopping</Button></Link>
        </div>
      </header>
      <main className=" mt-5"> 
        <Category/>
        <section>
          <div className="text-center">
            <h1 className="mt-10 mb-3 text-3xl font-semibold">Featured Product</h1>
            <span className="inline-block w-[100px] h-[7px] bg-black"></span>
          </div>
        </section>
       <section style={{ backgroundImage: `url(${shopping2})`}} className="relative bg-cover bg-center w-full max-h-screen flex items-center justify-start py-10">
        <div className='absolute inset-0 bg-black opacity-75'></div> 
        <div className='p-4 z-10 relative space-y-4 text-white max-w-md'>
          <h3 className=' text-white text-lg font-medium'>Limited Time Offer</h3>
          <h2 className='text-xl font-bold text-white'>Special Edition</h2>
          <p className='text-gray-300'>Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net ullamcopper matis pulbinar dapbius neoparct.</p>
          <p className='text-capitalize'>Buy this t-shirt at 20% discount, use code OFF20</p>
          <Link to='/shop/allproducts' className='inline-block hover:scale-110 my-5 hover:outline-1 bg-white text-black font-medium p-3'>Start Shopping</Link>
        </div>
      </section>
      <section className='p-5 lg:flex-nowrap flex-wrap flex my-5 justify-center gap-5'>
        {Features.map((Feature, index)=>(
          <Card key={index} className='flex flex-col justify-center text-center items-center space-y-3 max-w-sm my-5'>
            <CardTitle>
              <Feature.icon className='text-black w-8 h-8'/>
            </CardTitle>
            <h4 className='font-bold'>{Feature.title}</h4>
            <p>
              {Feature.content}
            </p>
          </Card>
        ))}
      </section>
      <ScrollingBanner/>
      </main>
    </>
  );
}

export default App;