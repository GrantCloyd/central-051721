import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

const Input = styled.input`
    padding: 1em;
    margin: 1em 0;
    width: 18em;
    border-radius: 0.375em;  
`

const Textarea = styled.textarea`
    padding: 1em;
    margin: 1em 0;
    width: 18em;
    border-radius: 0.375em;
    height: 10em;
`

//Form handles POST and
function ItemForm({items, setItems}) {
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(false)

    let history = useHistory();

 
    async function handleSubmit(e){
        e.preventDefault()


        const itemData = {
            store_id:1,
            item_name: itemName,
            description,
            image_url: image,
            price
        }
        const res = await fetch('http://localhost:3000/items',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        const json = await res.json()
        
        setItems([...items, json])
        history.push("/");
    }


    return (
        <div> 
            <Form onSubmit={handleSubmit}>
                <h1>New Item</h1>
                <Input 
                    type="text" 
                    placeholder="Item Name"
                    value={itemName}
                    name="itemName" 
                    onChange={(e) => setItemName(e.target.value)}
                />
                <Input 
                    type="text" 
                    placeholder="Image Url"
                    value={image}
                    name="image" 
                    onChange={(e) => setImageUrl(e.target.value)}/>
                <Input 
                    type="number" 
                    placeholder="price"
                    value={price}
                    name="price" 
                    onChange={(e) => setPrice(e.target.value)}/>
                <Textarea 
                    placeholder="description"
                    name="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </Textarea><br />
                <input type="submit" value="Post" />
            </Form> 
            <div>
                {errors ? errors.map(error => <p>{error}</p>): null}
            </div>
        </div>
    )
}

export default ItemForm;
