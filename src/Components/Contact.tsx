import contact from '../assets/contact.jpg';
import "../animation.css"
import { Button } from '@/components/ui/button';
//import "./App.css"

function Contact() {
  // State

  // Comportement
  
  // Affichage
  return (
    <>
      <header style={{ backgroundImage: `url(${contact})`}} className="relative bg-cover bg-center min-h-100 max-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-75'></div>
        <div className='p-4 z-10 relative text-center space-y-4'>
          <h1 className=' text-white text-4xl font-extrabold'>Contact Us</h1>
        </div>
      </header>
      <main className=" mt-5 p-5">
        <section className=' mt-10'>
          <div className="text-center">
            <h3>Have any queries ?</h3>
            <h1 className='m-3 text-3xl font-semibold'>We're here to help.</h1>
            <span className="inline-block w-[100px] h-[7px] bg-black"></span>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-5 my-10'>
            <div className='outline-black/5 outline text-center p-5 rounded shadow-md space-y-3 max-w-xs'>
              <h2 className='text-xl font-semibold'>Sales</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <p className='text-blue-400 text-lg font-medium'>1800 123 4567</p>
            </div>
            <div className='outline-black/5 outline text-center p-5 rounded shadow-md space-y-3 max-w-xs'>
              <h2 className='text-xl font-semibold'>Complaints</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <p className='text-blue-400 text-lg font-medium'>1800 123 4567</p>
            </div>
            <div className='outline-black/5 outline text-center p-5 rounded shadow-md space-y-3 max-w-xs'>
              <h2 className='text-xl font-semibold'>Returns</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <p className='text-blue-400 text-lg font-medium'>1800 123 4567</p>
            </div>
            <div className='outline-black/5 outline text-center p-5 rounded shadow-md space-y-3 max-w-xs'>
              <h2 className='text-xl font-semibold'>Marketing</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <p className='text-blue-400 text-lg font-medium'>1800 123 4567</p>
            </div>
          </div>
        </section>
        <section className='md:flex py-5 mb-10'>
          <div className=' my-10 md:max-w-1/2 p-10'>
            <h6 className='font-light'>Don't be a stranger!</h6>
            <h2 className='font-semibold mb-3 text-2xl'>You tell us. We listen.</h2>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          </div>
          <div className='p-5 shadow-sm outline outline-black/5 md:max-w-1/2 w-full'>
            <form>
              <div className='space-y-5'>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'  rows={10} cols={50} placeholder="Saisissez votre message ici..."></textarea>
                <Button onClick={(e)=>e.preventDefault()} variant="default" size="lg">Submit</Button>
              </div>
            </form>
            
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

export default Contact;