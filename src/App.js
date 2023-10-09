import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Videos from './components/Videos.js';
import Upload from './components/Upload.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import ForgetPassword from './components/ForgetPassword.js';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/videos' element={<Videos/>}/>
        <Route exact path='/upload' element={<Upload/>}/>
        <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/forgotpassword' element={<ForgetPassword/>}/>

      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
