// Title Component

function Title() {
    return (
        <div>
            <h2>Here's my Title Component</h2>
        </div>
    );
}

// Form Component

function Form() {
    return (
        <div>
            <h2>Here's my Form Component</h2>
        </div>
    );
}

// Create a Header Component to display a Title
function Header(props) {
    // console.log(props);

    // "isLoggedIn"

    // Ternary Operator
    // Condition ? ifTrue : ifFalse

    // Think about using embedded JS in your JSX.

    return (
        <div>
            <h3>{ props.isLoggedIn ? "Logged In" : "Logged Out" }</h3>
            <h1>{props.title}</h1>
            <h1>{props.name}</h1>
        </div>
    )

    // if (props.isLoggedIn) {
    //     return (
    //         <div>
    //             <h1>Logged In</h1>
    //             <h1>{props.title}</h1>
    //             <h2>{props.name}</h2>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <h1>Not Logged In</h1>
    //             <h1>{props.title}</h1>
    //             <h2>{props.name}</h2>
    //         </div>
    //     );
    // }   
}

export { Header, Title, Form };
  