import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Welcome to PickupBiz</h1>
         <h3>Go PDAC</h3>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn with PickupBiz
        </a>
      </header>
    </div>
  );
}

export default App;
