import './App.css';
import Square from './Square';

function App() {
  const propVariable = "this is a prop"
  return (
    <div className="App">
      <Square propVar={propVariable}/>
    </div>
  );
}

export default App;
