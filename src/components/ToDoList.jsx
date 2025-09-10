import { BiPencil } from "react-icons/bi"; 
import { BsFillTrash3Fill } from "react-icons/bs"; 
import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal";

const ToDoList = ({data, setData}) => {
  
  const handleCompleted = (id)=>{
    const newData = data.map(t=>{
        return t.id==id ? {...t, isCompleted:!t.isCompleted} : t
    })
    setData(newData)
  }
    
  const handleDelete = (id, e)=>{
    e.stopPropagation();
    const newData = data.filter(t=>t.id!=id)
    setData(newData)
    toast.error("O'chirildi")
  }

  const [modal, setModal] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const [text, setText] = useState('')

  const handleEdit = (id, text, e)=>{
    e.stopPropagation();
    setUpdateId(id)
    setText(text)
    setModal(true)
  }

    
  return (
    <div className='container w-full max-w-[59.375rem]'>
        <Toaster position="top-center" reverseOrder={false}/>
        <ul className='flex flex-col gap-[.9375rem]'>
        {modal && <Modal setModal={setModal} text={text} updateId={updateId} data={data} setData={setData}></Modal>}
            {data.map(t=>(
                <li onClick={()=>handleCompleted(t.id)} key={t.id} className={`custom-shadow rounded-[.625rem] p-[.625rem] flex justify-between items-center cursor-pointer ${t.isCompleted ? "line-through opacity-40" : ''}`}>
                    <p>{t.text}</p>
                    <div className="flex gap-[.3125rem]">
                        <button onClick={(e)=>handleEdit(t.id, t.text, e)} className="btn btn-warning"><BiPencil className="text-[1.125rem]"/></button>
                        <button onClick={(e)=>handleDelete(t.id, e)} className="btn btn-error"><BsFillTrash3Fill className="text-[1.125rem]"/></button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList