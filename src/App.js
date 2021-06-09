import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState("");

  function getNewTodo() {
    if(todo === 20){
      setTodo(1);
      return;
    };
    setTodoId((todoId) => todoId + 1);
  }

  useEffect(() => {
    async function fetchTodo() {
      const url = `/.netlify/functions?id=${todoId}`;
      try {
        const todo = await fetch(url).then((res) => res.json());
        console.log(todo);
        setTodo(todo.title);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTodo();
  }, [todoId]);

  return (
    <div className="App">
      <p>
        <button onClick={getNewTodo}> Get another todo </button>
      </p>
      <p>{todo}</p>
    </div>
  );
}

export default App;
