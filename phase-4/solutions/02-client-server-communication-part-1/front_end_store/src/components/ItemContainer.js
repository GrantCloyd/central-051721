import ItemCard from "./ItemCard.js";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function ItemContainer({ items, setItems }) {
  return (
    <>
      <h1>Items</h1>
      <Grid>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            items={items}
            setItems={setItems}
          />
        ))}
      </Grid>
    </>
  );
}

export default ItemContainer;
