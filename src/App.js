import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import PokemonList from "./PokemonList/PokemonList";
import PokemonDetail from "./PokemonDetail/PokemonDetail";

function App() {
  return (
      <Router>
        <Header></Header>
          <Routes>
              <Route path="/" element={<PokemonList />} />
              <Route path="/pokemon/:name" element={<PokemonDetail />}/>
          </Routes>
      </Router>
  );
}

export default App;
