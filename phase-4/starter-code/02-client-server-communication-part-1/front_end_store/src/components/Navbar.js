import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  background: lightblue;
  height: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    padding: 1em;
    transition: background 0.3s 0s ease-in-out;
    &:hover {
      background: lightskyblue;
    }
  }
  a.active {
    background: #62c0fa;
  }
`;

function Navbar() {
  return (
    <NavBar>
      <NavLink
        exact
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/items/new"
      >
        New Item
      </NavLink>
    </NavBar>
  );
}

export default Navbar;
