import React, {useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemCollection from "./ItemCollection";
import OrderCollection from "./OrderCollection";
import NewItem from "./NewItem";


function App() {
  const [user, setUser] = useState(null);
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewItem user={user} />
          </Route>
          <Route exact path="/" >
            <ItemCollection user={user}/>
          </Route>
          <Route path="/orders">
          <OrderCollection user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
