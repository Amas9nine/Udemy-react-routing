import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url = "https://api.opensea.io/api/v1/assets?format=json";
  const [todo, setTodo] = useState(null);

  console.log("before fetch begin -> null of useState(null)")
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [])

  return (
    <div className="App">
      <h1>H! H! H! 1</h1>
      {todo && <h2>{todo.assets[0].id}</h2>}
      {todo && <img alt="dada" src={todo.assets[0].image_url} />}
    </div>
  );
}

export default App;
