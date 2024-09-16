// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Aboutme from './Screens/Aboutme';
import Footer from './components/Footer';
import Projects from './Screens/Projects';
import React, { Suspense } from 'react';

const Cards = React.lazy(() => import('./Screens/Cards'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/aboutme' element={<Aboutme />} />
          <Route
            exact
            path='/projects'
            element={
              <Suspense fallback={<Projects />}>
                <Cards />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
