import React from 'react';
import {Button} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';
import Header from './components/Header';
import ColorModeSwitcher from './ColorModeSwitcher';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
