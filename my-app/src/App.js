
import Dicionary from "./components/Dictionary";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dicionary defaultKeyword="hello"/>
        </main>
        <footer className="mt-5 footer">
        
        </footer>
      </div>
    </div>
  );
}

export default App;
