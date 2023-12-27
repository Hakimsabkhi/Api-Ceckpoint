import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  });

  return (
    <div className="App">
      {todos?.map((el) => (
        <p> {el.title} </p>
      ))}
    </div>
  );
}

export default App;
