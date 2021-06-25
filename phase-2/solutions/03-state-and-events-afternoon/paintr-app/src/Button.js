// Create ONE state that will keep track of whether
// a Button has been toggled, "isToggled"
import { useState } from 'react';



// function Button(props) {
const Button = (props) => {
    // set isToggled state using useState
    const [isToggled, setToggle] = useState(false);

    // props.name = "cart" / "heart"
    
    return (
        // <>...</> is shorthand for <React.Fragment></React.Fragment>
        <>
            {props.name === "cart" ? (
                <button onClick={() => setToggle(!isToggled)}>
                    { isToggled ? "Added to Cart" : "Add to Cart" }
                </button>
            ) : (
                <button onClick={() => setToggle(!isToggled)}>
                    { isToggled ? '❤️' : '♡' }
                </button>
            )}
        </>
    )    
    
    // Rendering conditional logic outside of return statement

    // if (props.name === "cart") {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? "Added to Cart" : "Add to Cart" }
    //         </button>
    //     );
    // } else {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? "Liked" : "Like" }
    //         </button>
    //     );
    // }
};

export default Button;