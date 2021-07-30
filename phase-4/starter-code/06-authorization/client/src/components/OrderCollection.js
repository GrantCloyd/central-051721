import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import ItemCard from './ItemCard'

function OrderCollection({user}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getOrders(){
      const res = await fetch(`/users/${user.id}`)
      if(res.ok){
         const user = await res.json()
        setItems(user.user_items)
      }
    }
    getOrders()
  }, []);

  return (
    <Wrapper>
      {items.length > 0 ? (
        items.map((item) => (
          <Box>
          <ItemCard item={item} user={true}/>
          </Box>
        ))
      ) : (
        <>
          <h2>No Items Found</h2>
          <Button as={Link} to="/">
            Order New Item
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default OrderCollection;
