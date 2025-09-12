import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    if(Array.isArray(savedTodos)){
      setData(savedTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data))
  }, [data]);


  return (
    <>
      <Navbar></Navbar>
      <Form data={data} setData={setData}></Form>
      <ToDoList data={data} setData={setData}></ToDoList>
    </>
  )
}

export default App
