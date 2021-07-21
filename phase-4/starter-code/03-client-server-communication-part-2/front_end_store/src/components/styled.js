import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Input = styled.input`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;

  ${(props) =>
    props.submit &&
    css`
      cursor: pointer;
      background: lightskyblue;
      color: white;
      transition: background 0.3s 0s ease-in-out;
      :hover {
        background: #62c0fa;
      }
    `}
`;

export const Textarea = styled.textarea`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;
  height: 10em;
`;

export const Card = styled.div`
  padding: 1em;
  @media (min-width: 1375px) {
    width: 31%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

