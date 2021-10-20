import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Gallery from './components/gallery/gallery';

function App() {
  const [cards, setCards] = useState([])
  return (

    <div className="App">
      <Navbar />
      <div className="Gallery">
        <Gallery />
      </div>
      
    </div>
  );
}

export default App;
