import logo from './logo.svg';
import './App.css';

// Component Imports
import { Header, Title, Form } from './Header';
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Header
        title="Welcome to My React App"
        name="Louis"
        isLoggedIn={false}
      />
      
      <Title />
      <Form />
    </div>
  );
}

export default App;
