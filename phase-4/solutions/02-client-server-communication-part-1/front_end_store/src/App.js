import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router";
import Navbar from './components/Navbar';

import ItemContainer from './components/ItemContainer.js'
import ItemForm from './components/ItemForm'

const API_PATH = `http://localhost:3001/items`

function App() {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(API_PATH) // gives us a promise that will resolve to the response
  //     .then(response => response.json())
  //     .then(setItems)
  // }, []) // only invoke this function after first render

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_PATH);
      const items = await res.json();
      setItems(items)
    }
    fetchData()
  },[])

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
