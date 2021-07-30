import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Wrapper, Logo, Nav} from './style'
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  console.log(user)
  function handleLogoutClick() {
    async function logout(){
      const res = await fetch("/logout", { method: "DELETE" })
        if (res.ok) {
          setUser(null);
        };
      };
    logout()
  }
  
  return (
    <Wrapper>
      <Logo>
        Flatazon
      </Logo>
      <Nav>
        <Button as={Link} to="/">
          Store
        </Button>
        <Button as={Link} to="/orders">
          Orders
        </Button>
        {user.admin =='true'? <Button as={Link} to="/new">
          New Item
        </Button>: null}
       
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}


export default NavBar;
