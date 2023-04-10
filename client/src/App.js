import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Common/Nav";
import Footer from "./Components/Common/Footer"
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import About from "./Components/About/About";
import Collector from './Components/Collector/Collector';
import Result from "./Components/Result/Result";
import Payment from './Components/Payment/payment';

import PaymentProtect from "./ProtectedRoutes/PaymentProtect"
import LoginProtect from "./ProtectedRoutes/LoginProtect"

import { useState } from 'react';

function App() {
  const [currentState,setcurrentState]=useState(false);

  return (
    <BrowserRouter>
      <Nav currentState ={setcurrentState}/>

        <Routes>        
          <Route index path='/' element={<Home/>} />
          <Route path='/login' element={<Login currentstate={currentState}/>} />
          <Route path='/about' element={<About/>} />

        {/* protect route */}
          <Route path="/" element = {<PaymentProtect/>} >
            <Route path= "/QandA" element={<Collector/>}></Route>
            <Route path= "/result" element={<Result/>}></Route>
          </Route>

          <Route path = "/" element= {<LoginProtect/>}>
            <Route path="payment" element={<Payment/>}></Route>
          </Route>

        {/* Page not Found */}
         <Route path="*" element = {<div className="notfound">404 : Page not Found </div>}></Route>
        </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
