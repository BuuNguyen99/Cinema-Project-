import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/Body/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <Header/>
     <HomePage/>
     <Footer/>
    </div>
  );
}

export default App;
