import { Card, Image } from './styled';
function ItemCard({ item }) {
  return (
    <Card>
      <Image src={item.image_url}/>
      <h2>{item.item_name}</h2>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
    </Card>
  );
}

export default ItemCard;
