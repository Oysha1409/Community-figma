import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState("");

  async function fetchData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${dataName}`)
      .then(response => response.json())
      .then(json => setData(json));
  }

  useEffect(()=> {
    fetchData()
  }, [dataName]);

  return (
    <>
    <div className='btn-group'>
    <button onClick={() => setDataName ("posts")}>Posts</button>
    <button onClick={() => setDataName ("comments")}>Comments</button>
    <button onClick={() => setDataName ("todos")}>Todos</button>
    <button onClick={() => setDataName ("users")}>Users</button>
    </div>

    <div>
    {data.map((el) =>(
      <p>{el.title}</p>
    ))}
    </div>
  
    </>
   
  );
}

export default App;
