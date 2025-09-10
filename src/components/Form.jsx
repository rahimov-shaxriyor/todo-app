import { AiOutlinePlus } from "react-icons/ai"; 
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import toast, { Toaster } from "react-hot-toast";

const Form = ({setData}) => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const obj = {
        id: uuidv4(),
        isCompleted: false,
        text: formData.get("todo-text")
    }
    setData(prev=>[...prev, obj])
    e.target.reset()
    toast.success("Qo'shildi")
  }  

  return (
    <div className='container mb-[2.5rem]'>
        <Toaster position="top-center" reverseOrder={false}/>
        <form onSubmit={handleSubmit} className='flex gap-[.625rem] justify-center'>
            <input type="text" placeholder="To-do task..." className="input input-primary" name="todo-text" autoComplete="off" required />
            <button className="btn btn-primary"><AiOutlinePlus className="text-[1.125rem]"/></button>
        </form>
    </div>
  )
}

export default Form