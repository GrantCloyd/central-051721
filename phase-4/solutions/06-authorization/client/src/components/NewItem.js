import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewItem({ setItem }) {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const itemData = {
      store_id: 1,
      item_name: itemName,
      description,
      image_url: imageUrl,
      price
    };
    async function createItem(){
     const res = await fetch("/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
      if(res.ok){
        setIsLoading(false);
        history.push("/");
      } else {
        res.json().then((err) => setErrors(err.errors));
      };
    };
    createItem();
  };

  return (
    <Wrapper>
      <WrapperChild>
        <h2>New Item</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="itemName">itemName</Label>
            <Input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">price</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="imageUrl">Image</Label>
            <Input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewItem;
