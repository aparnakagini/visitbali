import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subscription from './components/Subscription';
import Packages from './components/Packages';
import Footer from './components/Footer';
import Attractions from './components/Attractions';
import Accommodation from './components/Accommodation';
import Dining from './components/Dining';
import Confirmation from './components/Confirmation';
import BookingDetails from './components/BookingDetails'; // Import BookingDetails component
import './App.css';

function App() {
  return (
    <Router basename="/visit-bali">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Hero />
              <About />
              <Subscription />
              <Packages />
            </React.Fragment>
          } />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/booking-details" element={<BookingDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;