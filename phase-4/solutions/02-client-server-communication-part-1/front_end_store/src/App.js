import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router";

import ItemContainer from './components/ItemContainer.js'
import ItemForm from './components/ItemForm'

const API_PATH = `http://localhost:3000/items`

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems(){
      let res = await fetch(API_PATH)
      let json = await res.json()
      setItems(json)
    }
    fetchItems();
  },[]);

  return (
      <div class="App">
      <Switch>
        <Route path="/items/new" component={() =><ItemForm items={items} setItems={setItems}/>} />
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
