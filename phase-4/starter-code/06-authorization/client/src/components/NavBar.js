import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Wrapper, Logo, Nav} from './style'
import { Button } from "../styles";

function NavBar({ user, setUser }) {


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
        <Button as={Link} to="/new">
          New Item
        </Button>
      </Nav>
    </Wrapper>
  );
}


export default NavBar;
