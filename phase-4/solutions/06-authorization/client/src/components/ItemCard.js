import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, Image, Button, Errors } from './style.js';

function ItemCard({ item, items, setItems, userOrders, user }) {
  let history = useHistory();
  const [errors, setErrors] = useState(null);

  //Delete item
  async function deleteItem() {
    const res = await fetch(`/items/${item.id}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      setItems(items.filter((i) => i.id !== item.id));
    }
  }

  //Review POST
  async function orderItem() {
    const orderData = {
      item_id: item.id
    };
    const res = await fetch(`/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    if (res.ok) {
      const order = await res.json();
      console.log(order)
      history.push(`/orders`);
    } else {
      const error = await res.json()
      setErrors(error.message)
    }
  }

  return (
    <Card>
      <Image src={item.image_url} alt={item.item_name} />
      <h2>{item.item_name}</h2>
      <h3>${parseFloat(item.price).toFixed(2)}</h3>
      <p>{item.description}</p>
      {!userOrders?(
      <>
      <Button green onClick={orderItem}>
        Order
      </Button>
      {user.admin=='true'?<Button red onClick={deleteItem}>
        Delete
      </Button>:null }
      <Errors>
        <p>{errors}</p>
      </Errors>
      </>
      ):<Button grey>Return</Button>}
    </Card>
  );
}


export default ItemCard;
