import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomePage from './components/Body/HomePage/HomePage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navigation/>
     <HomePage/>
     <Footer/>
    </div>
  );
}

export default App;
