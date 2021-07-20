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

//Form handles POST and adding the itme.
function ItemForm({items, setItems}) {
    const [errors, setErrors] = useState(false)

    let history = useHistory();

 
    async function handleSubmit(e){
        e.preventDefault()
        // write out the approach in psuedocode first, then implement
        const item = {
            store_id: 1,
            item_name: itemName,
            description: description,
            image_url: imageUrl,
            price: price
        }
        //
    }


    return (
        <div> 
            <Form onSubmit={handleSubmit}>
                <h1>New Item</h1>
                <Input 
                    type="text" 
                    placeholder="Item Name"
                    name="itemName" 
                />
                <Input 
                    type="text" 
                    placeholder="Image Url"
                    name="image" 
                />
                <Input 
                    type="number" 
                    placeholder="price"
                    name="price" 
                />
                <Textarea 
                    placeholder="description"
                    name="description" 
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
