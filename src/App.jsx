import { useState } from 'react'
import './App.css'
import { MdDelete } from 'react-icons/md'
import { FaCircle, FaClipboardList, FaRegCircle } from 'react-icons/fa'

function App() {
  const [tasks, setTasks] = useState([])
 
  const handleSubmit = e =>{
    e.preventDefault()
    const task = e.target.task.value;

    if(task.trim() === ''){
      return alert(" Task should not be empty")
    }

    
    
    
    const newTask = {
      id: task.length + 1,
      task,
      completed: false
      
    }
    

    setTasks([...tasks, newTask])
    e.target.task.value = ''; // Clear the input field

  }
  console.log(tasks)

  const handleDelete = (id)=>{
     const delteTask = tasks.filter(item=> item.id !== id)
     setTasks(delteTask)
    
  }

  const handleMarked = (id)=>{
    
    const markedItem = tasks.map(item=> {
      if(item.id === id){
        return {...item, completed: !item.completed}
      }
      return item
    })
    setTasks(markedItem)
    
  }
  

  return (
    <>
     <div className='py-12'>
          <div className='lg:w-[45%] mx-auto bg-white rounded-lg  px-6 py-8'>
            <h1 className='text-center lg:text-3xl '><span className='flex gap-2 items-center justify-center'>To-Do List  <FaClipboardList /></span></h1>
            <div className='my-4'>

            <form onSubmit={handleSubmit} className='  space-y-2'>

             <div className='flex flex-col lg:flex-row lg:relative'>
             <input placeholder='Add a New Task' className='border rounded-full focus:outline-orange-600  w-full px-4 py-2 focus:border ' type="text" name="task" id="" />
             <button className=' lg:absolute lg:right-0 rounded-full px-4 bg-orange-500  py-2 text-white' type='submit'>Add Task</button>
             </div>
            </form>
            </div>

            <div className=' my-4   w-full'>
                

                 
                   <ul className=' space-y-4'>
                    {
                      tasks.map(item=> (
                        <li className='px-4 py-2 rounded-lg border flex justify-between items-center' key={item.id}><span className={`flex items-center gap-2 ${item.completed && "line-through"}`}> 
                        <span onClick={()=> handleMarked(item.id)} className='cursor-pointer' > {item.completed   ? <FaCircle className='text-orange-600 '  /> : <FaRegCircle className=''/>} </span>
                          
                          {item.task}</span> <MdDelete onClick={()=>handleDelete(item.id)}  className='cursor-pointer' /></li>
                      ))
                    }
                   </ul>
            </div>
          
          </div>
     </div>
        
    </>
  )
}

export default App
