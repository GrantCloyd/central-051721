import { Card, Image } from './styled';
import { Link, useHistory } from 'react-router-dom'
function ItemCard({ item }) {
  const history = useHistory();

  async function handleClick(e) {
    const res = await fetch(`http://localhost:3001/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: {
          user_id: 2,
          item_id: item.id
        }
      })
    })
    const order = await res.json()
    history.push(`/orders/${order.id}`)
  }

  return (
    <Card>
      <Image src={item.image_url} />
      <h2>{item.item_name}</h2>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
      <p>
        <Link to={`/items/${item.id}/edit`}>Edit</Link>
        <button onClick={handleClick }>Buy</button>
      </p>
    </Card>
  );
}

export default ItemCard;
