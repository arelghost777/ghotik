import { Link } from 'react-router-dom';
export default function Footer(){

    return(
        <footer className=' p-4 bg-black text-white text-center space-y-4 flex flex-col items-center justify-center'>
        <Link className='inline-block hover:text-indigo-600'>About</Link>
        <Link to='/contact' className='inline-block hover:text-indigo-600'>Contact</Link>
        <Link className='inline-block hover:text-indigo-600'>Terms of Service</Link>
        <p className='small'>© 2025 GHOTIK. All right reserved</p>
        <p className='text-sm'>by arel.ghost</p>
        <div className=' space-x-5'>
          <a href="https://wa.me/qr/SG7U7NDYNIOJO1" className='text-white'><i className='fa-brands fa-facebook text-lg'></i></a>
          <a href="https://wa.me/qr/SG7U7NDYNIOJO1" className=' text-white'><i className='fa-brands fa-whatsapp text-lg'></i></a>
          <a href="https://wa.me/qr/SG7U7NDYNIOJO1" className='text-white'><i className='fa-brands fa-instagram text-lg'></i></a>
        </div>
      </footer>
    )
}