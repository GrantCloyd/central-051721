// set up import to bring in useState hook
import { useState } from 'react'; 

// Component Imports
import Button from './Button'

// function Painting() {
const Painting = props => {
  
  // Array Destructuring
  
  // Add a Painting to Cart 
  // const [isAdded, setAdded] = useState(false);

  // Heart a Painting
  // const [isLiked, setLiked] = useState(false);
  
  // console.log(isLiked);

  // if (!isAdded) {  

  return (
      <div>
        <img src={props.painting.image} />
        <h4>
          "{props.painting.title}" by {props.painting.artist.name}
        </h4>
        <p>Year: {props.painting.date}</p>
        <p>
          Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
        </p>
        {/* <button onClick={() => setAdded(!isAdded)}>
          { isAdded ? "Remove from Cart" : "Add to Cart" }
        </button>
        <button onClick={() => setLiked(!isLiked)}>
          { isLiked ? "Liked" : "Like" }
        </button> */}
        <Button name="cart" />
        <Button name="heart" />
      </div>  
    );
  // } else {
    return (
      <div>
        <h2>Added to Cart</h2>
        {/* <button onClick={() => setAdded(!isAdded)}>
          { isAdded ? "Remove From Cart" : "Add to Cart" }
        </button>
        <button onClick={() => setLiked(!isLiked)}>
          { isLiked ? "Liked" : "Like" }
        </button> */}
        <Button name="cart" />
        <Button name="heart" />
      </div>  
    );
  // }   
};

export default Painting;
