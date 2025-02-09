// App.js
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import routes from './routes';

function App() {

  return (
    <Router>
      <ToastContainer className="bg-red-600 h-[100px]" position="top-right" autoClose={3000}/>
      <Navbar cartProducts={cartProducts} />
      <Routes>
        {routes({ addToCart, cartProducts }).map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;