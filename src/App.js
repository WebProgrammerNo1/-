import './App.css'
import React, { useState } from "react";
import "@fontsource/open-sans"
import Home from "./Components/Home";
import Cart from './Components/Pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductShow from './Components/Pages/AllProductShow/AllProductShow';
import LikeCart from './Components/Pages/LikeCart/LikeCart';
import Cantact from './Components/Pages/Cantact/Cantact';
import Katalog from './Components/Pages/Katalog/Katalog';
import About from './Components/Pages/About/About';
import PaymentAndDelivery from './Components/Pages/PaymentAndDelivery/PaymentAndDelivery';
import MyUser from './Components/Pages/MyUser/MyUser';
import Menu from './Components/Pages/Menu/Menu';


function App() {
  const [cart, setCart] = useState([]);
  const [likecart, setLikeCart] = useState([]);
  const [data, setData] = useState([]);
  const [allproductData, setAllproductData] = useState([]);
  const [allproductDataCart, setAllproductDataCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (item ) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]); 
    
  };

  const handleClickLike = (item ) => {
    if (likecart.indexOf(item) !== -1) return;
    setLikeCart([...likecart, item]); 
    
  };
  
  const handleClickAllProduct = (item) => {
    if (allproductDataCart.indexOf(item) !== -1) return;
    setAllproductDataCart([...allproductDataCart, item])
  };

  const handleAllProduct = (item) => {
    const allproductData = item;
    setAllproductData([...item])
  };
    
  const date = data.concat(cart, allproductDataCart);

  return (
    <div className="App">
      <Router>
        <Routes>    
          <Route path="/" element={<Home size={cart.length} sizelike={likecart.length} handleClick={handleClick} handleAllProduct={handleAllProduct} handleClickLike={handleClickLike} openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path="/cart" element={
          <Cart 
          setCart={setCart}
          setAllproductDataCart={setAllproductDataCart}
          date={date}
          setData={setData}
          likecart={likecart}
          sizelike={likecart.length}
          handleClickLike={handleClickLike}
           />}/> 
          <Route path='/allProductShow' element={<AllProductShow likecart={likecart} size={allproductDataCart.length} sizelike={likecart.length} allproductData={allproductData} handleClickAllProduct={handleClickAllProduct} handleClickLike={handleClickLike} />}/>
          <Route path='/likecart' element={<LikeCart size={cart.length} likecart={likecart} setLikeCart={setLikeCart} sizelike={likecart.length} />}/>
          <Route path='/cantact' element={<Cantact size={cart.length} sizelike={likecart.length} />}/>
          <Route path='/katalog' element={<Katalog />}/>
          <Route path='/about' element={<About size={cart.length} sizelike={likecart.length} />}/>
          <Route path='/paymentAndDelivery' element={<PaymentAndDelivery size={cart.length} sizelike={likecart.length} />}/>
          <Route path='/myuser' element={<MyUser size={cart.length} sizelike={likecart.length} />}/>
          <Route path='/myuser/:menu' element={<Menu size={cart.length} sizelike={likecart.length} likecart={likecart} />}/>
        </Routes>
      </Router>
    </div>
    
    );
  }
  
  export default App;
  