import React, { useState } from "react";
import Hello from "./common/Hello";
import Header from "./common/Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Data from "./common/Data";
import Footer from "./Footer";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import ProductList from "./ProductList";
import Cart from "./Cart";




function App() {
  // const email = "dantattooz@gmail.com";
  // const web = "www.dantattooz.com";
  
  
  
 const appData = Data();
  

 const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  
 return (

   <div className="App">
         
      <Header />
      <Hello name={appData.name} />
      
      
      <main className="main">
        <Nav />
        <Section />
        <div className="product">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>

        <Aside />
        
        <div>
        <h2>
      <b className="artist">Our Popular Artists...</b>
    </h2>
      <ul>
        {appData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      </div>
    
      </main>

      
    
    <Routes>
      <Route path = "/" element ={<Home />} /> 
      <Route path = "/about" element ={<About />} /> 
      <Route path = "/services" element ={<Services />} /> 
      <Route path = "/gallery" element ={<Gallery />} /> 
      <Route path = "/contact" element ={<Contact />} /> 
    </Routes>


      <Footer />


    </div>
  );
  
}

export default App;
