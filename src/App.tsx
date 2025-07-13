// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar';
import routes from './routes';
import { Suspense } from 'react';

function App() {


  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;