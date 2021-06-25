// Define our Header Component
function Header(props) {
  return (
    <div id="toy-header">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

// Define our Container

function Container(props) {
  return (
    <div className={props.class}>
      <AddToyForm class="add-toy-form" />
    </div>
  );
}

// Define our AddToyForm Component

function AddToyForm(props) {
  return (
    <form className={props.class}>
      <h3>Create a toy!</h3>

      <Input
        type="text"
        name="name"
        value=""
        placeholder="Enter a toy's name..."
        class="input-text"
      />
      <Input
        type="text"
        name="image"
        value=""
        placeholder="Enter a toy's image URL..."
        class="input-text"
      />
      <Input type="submit" name="submit" value="Create Toy" class="submit" />
    </form>
  );
}

// Define our Input Component

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        className={props.class}
      />
      <br />
    </div>
  );
}

// Define our NewToyButton Component
function NewToyButton(props) {
  return (
    <p style={props.style} className={props.class}>
      Andy needs your help! <button id={props.id}>Add a new toy!</button>
    </p>
  );
}

// Define our ToyCollection Component
function ToyCollection(props) {
  return <div id={props.id}></div>;
}

function App() {
  return (
    <div>
      {/* Header Component */}
      <Header
        src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
        alt="toy-header"
      />

      {/* Container */}
      <Container class="container" />

      {/* NewToyButton Component */}
      <NewToyButton style={{ textAlign: "center" }} id="new-toy-btn" />

      {/* ToyCollection Component */}
      <ToyCollection id="toy-collection" />
    </div>
  );
}

/* 
Outline
- Take HTML from Toy Tales lab and turn it into JSX
  - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
  - What needs to change? What's the same?
- Refactor HTML into separate components
- JSX Syntax
- Pass in props

Going Further
- create a ToyCard component
- start by hard-coding the JSX in your component return statement
- then use props to make your component reusable
- you can copy/paste data from the toys.js file as props
- as a bonus, try importing data from the toys.js file
*/

export default App;
