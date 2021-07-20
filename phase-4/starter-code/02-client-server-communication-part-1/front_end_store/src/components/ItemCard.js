import styled from 'styled-components'

const Card = styled.div`
  padding: 1em;
  @media (min-width: 1375px) {
    width: 31%;
  }
`;

const Image = styled.img`
  max-width:100%;
`;

function ItemCard({ item }) {
  return (
    <Card>
      <Image src={item.image_url} />
      <h2>{item.item_name}</h2>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
    </Card>
  );
}

export default ItemCard;
