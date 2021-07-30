import { useEffect, useState } from "react";
import styled from "styled-components";
import{Box} from './style';
import ItemCard from './ItemCard';

function ItemCollection({user}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems(){
     const res = await fetch(`/items`)
     if (res.ok) {
       const data = await res.json()
       setItems(data)
     }
    }
    fetchItems()
  }, []);

  return (
    <Wrapper>
      {
        items.map((item) => (
          <Box>
          <ItemCard item={item} user={user}/>
          </Box>
        ))
        }
    </Wrapper>
  );
}

//Unique wrapper styling 
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default ItemCollection;
