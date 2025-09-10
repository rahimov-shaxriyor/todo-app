import { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  const [data, setData] = useState([])
  console.log(data);
  

  return (
    <>
      <Navbar></Navbar>
      <Form data={data} setData={setData}></Form>
      <ToDoList data={data} setData={setData}></ToDoList>
    </>
  )
}

export default App
