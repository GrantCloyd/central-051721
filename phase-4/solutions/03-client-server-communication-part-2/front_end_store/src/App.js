import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import ItemContainer from './components/ItemContainer';
import ItemForm from './components/ItemForm';
import OrderCard from './components/OrderCard';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems(path) {
      let res = await fetch(`http://localhost:3001/${path}`);
      let json = await res.json();
      if (path == 'items') {
        setItems(json);
      }
    }
    fetchItems('items');
  }, []);

  return (
    <div class="App">
      <Navbar />
      <Switch>
        <Route path="/items/new">
          <ItemForm items={items} setItems={setItems} />
        </Route>
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
