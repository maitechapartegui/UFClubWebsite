import logo from './logo.svg';
import './App.css';
function NavBar() {
  return (
    <div className="Nav">
      <nav>
        <a className="home">Home</a>
        <a className="calendar">Calendar</a>
      </nav>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
