import React from 'react';
import {Button} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <div>Hello</div>
      <Button colorScheme='facebook'>Aha</Button>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
