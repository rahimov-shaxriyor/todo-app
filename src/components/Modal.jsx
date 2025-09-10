import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Modal = ({text, setModal, updateId, data, setData}) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const newData = data.map(t=>{
        return t.id==updateId ? {...t, text:formData.get("todo-text")} : t
    })
    setData(newData)
    setModal(false)
  }
  return (
    <div className='w-screen h-screen absolute top-0 left-0 bg-[#000a]'>
        <div className='absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-[31.25rem] bg-white rounded-[.625rem] px-[.625rem] py-[1.25rem]'>
            <form onSubmit={handleSubmit} className='flex gap-[.625rem] justify-center'>
                <input type="text" placeholder={text} className="input input-primary" name="todo-text" autoComplete="off" required />
                <button className="btn btn-primary"><AiOutlinePlus className="text-[1.125rem]"/></button>
            </form>
        </div>
    </div>
  )
}

export default Modal