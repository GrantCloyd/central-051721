import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Input = styled.input`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;
`;

const Textarea = styled.textarea`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;
  height: 10em;
`;

//Form handles POST and adding the itme.
function ItemForm({ items, setItems }) {
  /*
  How to make this a controlled form:
  useState hooks to keep track of input values
  */
  const [itemName, setItemName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  // const [formState, setFormState] = useState({
  //   itemName: '',
  //   imageUrl: '',
  //   price: '',
  //   description: ''
  // })

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState(...formState, {
  //     [name]: value
  //   })
  // }

  const [errors, setErrors] = useState(false);

  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // write out the approach in psuedocode first, then implement
    // send a POST request via fetch that includes headers & body)
    // body should contain form data that matches item_params parameters in ItemsController
    // parse the JSON response and set it to state (use spread and add it to the end of items)
    // add a redirect to the home page after it works
    const res = await fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item: {
          store_id: 1,
          item_name: itemName,
          description: description,
          image_url: imageUrl,
          price: price
        }
      })
    })
    if (res.ok) {
      const newItem = await res.json()
      setItems([...items, newItem]) // items.concat(newItem)
      history.push('/')
    } else {
      const error = await res.json()
      setErrors(error.message)
    }

  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>New Item</h1>
        <Input
          type="text"
          placeholder="Item Name"
          name="itemName"
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          // onChange={handleChange}
          // value={formState.itemName}
        />
        <Input 
          type="text" 
          placeholder="Image Url" 
          name="image" 
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          // onChange={handleChange}
          // value={formState.imageUrl}
        />
        <Input 
          type="number" 
          placeholder="price" 
          name="price" 
          onChange={e => setPrice(e.target.value)}
          value={price}
          // onChange={handleChange}
          // value={formState.price}
        />
        <Textarea 
          placeholder="description" 
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={ description}
          // onChange={handleChange}
          // value={formState.description}
        >
        
        </Textarea>
        <br />
        <input type="submit" value="Post" />
      </Form>
      <div>{errors ? errors.map((error) => <p>{error}</p>) : null}</div>
    </div>
  );
}

export default ItemForm;
