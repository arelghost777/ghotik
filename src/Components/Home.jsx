import React from 'react';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import shopping from '../assets/shopping.jpg';
import shopping2 from '../assets/shopping2.jpg';
import electronics from '../assets/electronics.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import jewelery from '../assets/jewelery.jpg';
import "../animation.css"
//import "./App.css"

function App() {
  // State

  // Comportement
  
  // Affichage
  return (
    <>
      <header style={{ backgroundImage: `url(${shopping})`}} className="relative bg-cover bg-center min-h-100 max-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-75'></div>
        <div className='p-4 z-10 relative text-center space-y-4'>
          <h1 className=' text-white text-4xl font-extrabold'>Discover Our Collection</h1>
          <p className=' text-lg text-gray-300'>Shop our wide range of product tailored just for you</p>
          <Link to='shop/allproducts' className='inline-block hover:scale-110 my-5 hover:outline-1 bg-black text-white rounded p-3'>Start Shopping</Link>
        </div>
      </header>
      <main className=" mt-5">
        <section className='px-2'>
          <div className="text-center">
            <h1 className='mt-10 mb-3 text-3xl font-semibold'>Shop By Category</h1>
            <span className="inline-block w-[100px] h-[7px] bg-black"></span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-15'>
              <div style={{ backgroundImage: `url(${men})`}} className="relative bg-cover bg-center p-10 col">
                <div className=' inset-0'>
                    <h1 className='text-white text-2xl font-medium my-5'>MEN'S CLOTHES</h1>
                    <Link to='shop/men' className='inline-block border text-white py-1 px-4'>Shop Now</Link>
                </div>              
              </div>
              <div style={{ backgroundImage: `url(${women})`}} className="relative bg-cover bg-center p-10 col">
                <div className=''>
                  <h1 className='text-white text-2xl font-medium my-5'>WOMEN'S CLOTHES</h1>
                  <Link to='shop/women' className='inline-block border text-white py-1 px-4'>Shop Now</Link>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${jewelery})`}} className="relative bg-cover bg-center p-10 md:row-span-2 col">
                <div className=''>
                  <h1 className='text-white text-2xl font-medium my-5'>JEWELERY</h1>
                  <Link to='shop/jewelery' className='inline-block border text-white py-1 px-4'>Shop Now</Link>
                </div>              </div>
              <div style={{ backgroundImage: `url(${electronics})`}} className="relative bg-cover bg-center p-10 md:col-span-2">
                <div className=''>
                  <h1 className='text-white text-2xl font-medium my-5'>ELECTRONICS</h1>
                  <Link to='shop/electronics' className='inline-block border text-white py-1 px-4'>Shop Now</Link>
                </div>              
              </div>
          </div>
        </section>
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
          <Link className='inline-block hover:scale-110 my-5 hover:outline-1 bg-white text-black font-medium p-3'>Start Shopping</Link>
        </div>
      </section>
      <section className='p-2 md:flex-nowrap flex-wrap flex my-5 justify-center'>
        <div className='flex flex-col justify-center text-center items-center space-y-3 max-w-sm my-5'>
          <i className='fa-solid fa-earth-africa'></i>
          <h4 className='font-bold'>Worldwide Shipping</h4>
          <p>
            Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net
          </p>
        </div>
        <div className='flex flex-col justify-center text-center items-center space-y-3 maw-w-sm my-5'>
          <i className='fa-regular fa-star'></i>
          <h4 className='font-bold'>Best Quality</h4>
          <p>
            Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net
          </p>
        </div>
        <div className='flex flex-col justify-center text-center items-center space-y-3 max-w-sm my-5'>
          <i className='fa-solid fa-tag'></i>
          <h4 className='font-bold'>Best Offers</h4>
          <p>
            Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net
          </p>
        </div>
        <div className='flex flex-col justify-center text-center items-center space-y-3 max-w-sm my-5'>
          <i className='fa-regular fa-credit-card'></i>
          <h4 className='font-bold'>Secure Payments</h4>
          <p>
            Lorem ipsum dolor sit amet consecteur apdising elit. Ut elit telus luctus net
          </p>
        </div>
      </section>
      <section className='border-y-1 border-gray-200 scroll-container'>
        <div className='font-bold text-lg px-2 py-5 scrolling-text'>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </div>
      </section>
      </main>
    </>
  );
}

export default App;