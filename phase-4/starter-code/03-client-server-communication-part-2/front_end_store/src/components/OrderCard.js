import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function OrderCard() {  
    const [order, setOrders] = useState(null);
    const id = useParams().id
  
    useEffect(() => {
        async function fetchOrder(){
          let res = await fetch(`http://localhost:3000/orders/${id}`)
          let json = await res.json()
          setOrders(json)
        }
        fetchOrder()
      },[]);

    return (
        <> 
            {order?<div key={order.id}>Item:{order.item.item_name} User:{order.user.user_name}</div>:null} 
        </>
    )
}

export default OrderCard;
