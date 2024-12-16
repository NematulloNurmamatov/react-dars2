// import './App.css';

import { useState } from "react";
import Cards from "./components/Cards";

function App() {

  const [count, setcount] = useState(100);

  return (
    <div className="App">
      <Cards/>
      
    </div>
  );
}

export default App;
