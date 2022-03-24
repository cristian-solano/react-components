import logo from './logo.svg';
import './App.css';
import Button from './Components/button/button';

function App() {

  const num = 5
  const result = num * 2

  return (
    <div className="App">
      <header className="App-header">
        { result }
        <Button name="Hola Grupo" color='red'></Button>
        <Button name="Hola a Todos" color='green'></Button>

      </header>
    </div>
  );
}

export default App;
