import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router";
import Navbar from './components/Navbar';

import ItemContainer from './components/ItemContainer.js'
import ItemForm from './components/ItemForm'

const API_PATH = `http://localhost:3001/items`

function App() {
  const [items, setItems] = useState([]);

  return (
    <div class="App">
      <Navbar />
      <Switch>
        <Route path="/items/new">
          <ItemForm items={items} setItems={setItems} />
        </Route>
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
